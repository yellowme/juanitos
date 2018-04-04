# Hellow

## Motivation

1. Many templates out there contains a lot of stuff that might not be useful for our needs.
2. Along with the magic, many templates also come with a lot of boilerplate code.
3. Cause we are on 2018, use *yarn* bro! 
4. We need to improve the folder structure in our projects.
5. We need to increase our completion rate.

## Before you start...

- Download and install [React WebTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

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

## Project Structure

* We use this [folder structure](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1) to organize our project in scenes, components and services. We are not sure how to handle Redux yet but it will resemble this structure. The idea is that every component have all the things necessary to inside its folder.

## Storybook

Learn more about [Storybook](https://storybook.js.org/) and why it can be a useful tool during development. Try to use it to create/debug your components.

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
        - `ComponentName.test.js`

### Configuration

To tweak the jest configuration just modify the jest options on the package.json. To modify the enzyme behaviour check the configurations on `config/enzyme/*`.

## Husky

[Husky](https://github.com/typicode/husky) is used to ensure that before doing a push to the remote repository, our project do not have any broken tests and that the code style was followed. If there is any error husky will prevent the push and display the errors on console.

## Miscellaneous

### Recommended Libs

- [classnames](https://github.com/JedWatson/classnames): for conditionally rendering classes on components
- [React router 4](https://reacttraining.com/react-router/): So your user can move around your application using links and urls.

## TODO

* [ ] How can we handle modal pages, it should have their own URL? How trello accomplish this?
* [ ] How can we integrate Redux? Shold we use a new folder container for it? There is another approach in order to keep modularity?
* [ ] Consider "yeoman" generators or CLI to facilitate the life of the developer
* [ ] Review our React Router implementation and version use.

