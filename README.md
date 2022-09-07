# Sparkle Up

Sparkle Up is a small app built with Vue and Vuetify.

## Project setup

### Clone down the project

First you will have to clone down the repository. Once you have completed that, change directories into _sparkle-up_ so that you can run the following

### Install all the needed dependencies

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Usage

If you go to the `/sparkling-waters` route, you can use the _Add a sparkling water_ form to add new sparkling waters.

#### Sparkling Water Form

| Inputs      | Types       | Required                            | Rules                        |
| :---        | :---        | :---                                | :---                         |
| Flavor      | String      | True                                | Must have a written value    |
| Brand       | String      | True                                | Must have a selected value   |
| Other Brand | String      | Only if **Brand** is set to _other_ | Must be under 30 characters  |
| Score       | Number      | True                                | Must have a selected value   |
| Review      | String      | True                                | Must be under 100 characters |

#### Example Sparkling Water

```json
{
  "flavor": "Lemon",
  "brand": "La Croix",
  "rating": 10,
  "review": "The best sparkling water."
}
```

#### Editing a Sparkling Water

If you wish to edit sparkling waters that have already been made, you can do so by clicking on the pencil icon on the right hand side of a sparkling water list item, and the _Add a sparkling water_ form will fill with all the sparkling water values.

&#10024; Sparkle Up &#10024;

## License

[MIT](https://choosealicense.com/licenses/mit/)
