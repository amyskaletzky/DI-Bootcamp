import chalk from "chalk";

export const ageMiddle = (store) => (next) => (action) => {
    next(action)
    console.log(chalk.blue('caught in the middleware'), store.getState());
}

