---
outline: deep
---

# The Database

::: info
The presented examples in this documentation have been generated from the PREUAT environment, a lower environment with the same schema as the Production environment with a mass database. This database has similar information from Production with masked fields for security.
:::

To understand this application, it's recommended to understand the logic behind the application. The Database structure is a good starting point to help you understand how all the information it's connected. Here's a guide to introduce you to the essential Databases and their schemas.

## The Schemas

During the history of this application, the Database schema has changed many times, looking for improvements and best practices. The current state of the database is a result of those changes.

To simplify the onboarding process, we only show the most commonly used Databases. While working on the tool, you can find new information about the project structure. As we explained before, this project is enormous, and not all of the application has been covered by one person.

```
Pre UAT
├─ Accounts           - Very Important - All related to Users and Permissions.
├─ AssetMgmt          - Primary Schema of C360 / Related to Service Request Form
├─ Billing            - [TODO]
├─ Collateral360      - New and Modern Tables are created here.
├─ DBReview           - For some Features
├─ Parcel             - Core tables from Parcel still used on C360
├─ Reports            - A lot of adaptations for C360 (Core Database)
├─ Users              - Bids from the Vendors
├─ los_oauth_db       - Important for the LOS_APIS, the API version of C360
├─ performance_schema - Default database permissions
└─ Queues             - Before the Laravel implementation ([Todd] Is this important?)
```

Let's now review those schemas in more detail:

- [Accounts](/docs/onboarding/database/schemas/accounts)

## Important Relations

Relationship Symbology:
```
-     - one TO one
-<    - one TO many
>-    - many TO one
>-<   - many TO many
-0    - one TO zero or one
0-    - zero or one TO one
0-0   - zero or one TO zero or one
-0<   - one TO zero or many
>0-   - zero or many TO one
```

Here's a list of the essential relations:

- `Accounts.Accounts` `>-<` `Accounts.Offices` - Every **Account** belongs to One or More **Offices**. (many TO many)
- `Accounts.Company` `-<` `Accounts.Offices`  - Every **Company** have to One or More **Offices**. (one TO many)
- `Accounts.Accounts` `-0` `Accounts.AccountDetails`  - Every **Account** could have Zero or One **AccountDetail**. (one TO zero or one)
- `Accounts.Roles` `>-<` `Accounts.RolesPermissions`  - Every **Role** belongs to One or More **Permission**. (one TO zero or one)
