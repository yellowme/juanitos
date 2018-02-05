# Hellow

## USE YARN!

## Eslint config

We use the following configurations, if you need to add or change any rule check their github page.

1. [airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
   1. [airbnb code style for js](https://github.com/airbnb/javascript)
2. [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

## Styling

* We use [SASS](https://sass-lang.com/)
* Be Mobile first!
* Please use the [BEM](https://en.bem.info/methodology/quick-start/) Methodology! Or if you have the time learn about [styled components](https://www.styled-components.com) and remove SASS. NO MORE HORRIBLE CSS CRASHES AGAIN!


## Storybook

Learn more about [Storybook](https://storybook.js.org/) and why it can be a useful tool during development. Try to use it to debug/create your components.

### Run storybook

use the command

```sh
yarn run storybook
```
### Create a storybook for a component

Please follow this pattern.

* `MyComponent (folder)`
    * `MyComponent.js` (the component)
    * `MyComponent.stories.js` (the stories of the component)


For example is you have a *Foo* component, the stories for this component should be inside the directory named `Foo` and have the following name:

`Foo.stories.js`


### Storybook knobs

You can change the props values in real time using the knobs of storybook. You can learn more about them in [here](https://github.com/storybooks/storybook/tree/master/addons/knobs#available-knobs).

There are some [addons](https://storybook.js.org/addons/addon-gallery/) for storybook that we can add to the project to facilitate development.

#### Webpack configuration for storybook

Storybook use webpack and if you need to tweak the webpack configuration the file is is `.storybook/webpack.config.js`


## Testing

For testing we use [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/). If you want to know what can you do with them please go to their docs pages.

Our test files should belong inside the Component directory inside a `test` folder.

The test files are divided in two kinds:

 - snapshot testing:
    - Our snapshot testing files should follow this pattern:
        - `ComponentName.snapshot.js`
    - Remember to store on version control the .snap files generated!
 - behaviour testing:
    - Our behaviour test files should follow this pattern:
        - `ComponentName.snapshot.js`

### Configuration

To tweak the jest configuration just modify the jest options on the package.json. To modify the enzyme behaviour check the configurations on `config/enzyme/*`.

## Miscellaneous

### Recommended Libs

- [classnames](https://github.com/JedWatson/classnames): for conditionally rendering classes on components

