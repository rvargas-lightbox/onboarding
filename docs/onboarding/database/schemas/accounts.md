---
outline: [2,3]
---

# The <span class="schema-table">Accounts</span> Schema

This schema contains all the information related to the Users and Entities of the platform and their permissions and relations. We will prefix the schema's name on every table to avoid confusion. We are going to use a <span style="color: #888;">gray</span> color to define the name of the schema.

To standardize the aliases used on all the application queries, we will add the preferred alias of every table based on the expected use convention by most developers. The usual name convection uses the schema's first letter and the visited table's first letter.

::: info
Masked Information
- All Account's emails have been masked for security.
- All Passwords are hashed.
:::

Let's review the list of most essential tables in this schema:

## Accounts Relations

### <span style="color: #888; padding-bottom: 0;">Accounts.</span>Accounts
**Alias:** aa

This table store all the accounts from the system. It's crucial to understand the structure of this table. If you can see the size of this table, it's larger than expected; that's because we have some _BLOG_ columns that store the metadata of images for the user.

> Every **Account** belongs to one or more **Offices**.

::: tip
The `defaultRole` column contains the `id` of the **Accounts.Roles** table.
:::

::: warning
- AVOID using * from this table to avoid database overload because of the table size.
- NEVER delete from this table. We use the `deactivate` column to soft-delete users. We need those users for history.
- ALWAYS use the `deactivate` column on every query related to this table to validate the user status except in those scenarios that require deactivated users.
:::

### <span class="schema-table">Accounts.</span>OfficesAccounts
**Alias:** aoa

This is only a relational table. Office information is stored on the `Accounts.Offices` table.

### <span class="schema-table">Accounts.</span>Offices
**Alias:** ao

This table contains all the Offices information.

> Every **Office** belongs to one **Company**.

### <span class="schema-table">Accounts.</span>Companies
**Alias:** ac

This table contains all the Offices information.

> Every **Company** has one or more **Offices**.

### <span class="schema-table">Accounts.</span>Entities
**Alias:** ae

This is the higher group hierarchy in the application. In the interface of C360, this is called **Organization**, but in the codebase is defined as **Entity**. Entities are essential because there exists business logic specific to Entities. This table is related to the `Switch Company` feature.

> Every **Company** has one or more **Offices**.

::: info
All the defined tables until now are all the **core** tables for accounts relations.
:::

## Auxiliary Tables

### <span class="schema-table">Accounts.</span>AccountDetails
**Alias:** aad

This table contains extra data related to the account.

> Every **Account** has one **Account Detail**.

> Not all accounts have an Account Detail record.


### <span class="schema-table">Accounts.</span>AccountSettings
**Alias:** aas

NEED MORE INFORMATION

## Accounts Permissions

### <span class="schema-table">Accounts.</span>Roles
**Alias:** ar

Contain the information about the User's Defaults Role in the application.

::: warning
- AVOID the `code` column for business logic. Using `code` can be dangerous.
- Roles abstract permissions. Create business logic by using the Permissions table.
:::

### <span class="schema-table">Accounts.</span>RolesPermissions
**Alias:** arp

This is only a relational table. Permission information is stored on the `Accounts.Permissions` table.

### <span class="schema-table">Accounts.</span>Permissions
**Alias:** ap

This is a Reference table with all the existing Permissions for an Account. It includes others attributes about the permissions.

> The `keepWhenFinal` can be confusing. Don't waste time understanding this until you are related to any issue related to the Final Report.

> The `name` column is the one used to compare Roles.

### <span class="schema-table">Accounts.</span>EntityOverseerAccounts
**Alias:** aeoa

This table store Accounts with the ability to jump between Companies. This ability it's NOT defined in the `Accounts.Permissions` table.

### <span class="schema-table">Accounts.</span>EntityOverseerCompanyAccess
**Alias:** aeoca

This table defines limitations to the Account over a defined Company. An Account only has access to the Companies related to this table. If not record related, the Account can access all the Companies of the Entity. This ability it's NOT defined in the `Accounts.Permissions` table.

### <span class="schema-table">Accounts.</span>EntityOverseerOfficeAccess
**Alias:** aeooa

This table defines limitations to the Account over a defined Office. An Account only has access to the Offices related to this table. If not record related, the Account can access all the Offices of the Entity. This ability it's NOT defined in the `Accounts.Permissions` table.

### <span class="schema-table">Accounts.</span>EntityRoles
**Alias:** aer

An important table. Roles are available at the Entity level. This defines the relation of all the Roles of an Entity. By doing this, the user can define custom permissions per Role.

### <span class="schema-table">Accounts.</span>CompaniesOptions
**Alias:** aco

An important table for business logic. Control a lot of configurations options for a Company.

## Audit Tools

### <span class="schema-table">Accounts.</span>Changelog
**Alias:** acl

This is an Audit table that stores all the events that occur in the application. This is the main table for forensic investigation.


## From Laravel

### <span class="schema-table">Accounts.</span>sessions
**Alias:** as

The default Laravel sessions table. This app uses the Database driver to handle sessions with Laravel.

### <span class="schema-table">Accounts.</span>migrations
**Alias:** am

Laravel's migration table. This table is different from the default Laravel session because it implements a custom package that allows the handling of metadata to simplify the migration process if needed.

::: info
Some fields could be significant because a custom package, Pneumatic Migrations by Chris Harpers, simplify the revert process of migrations if needed.
:::

