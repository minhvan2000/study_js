export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action);
        console.log('Prev State: ', prevState);
        console.log('Action Arguments: ', args);
        const nextStage = reducer(prevState, action, args);
        console.log('Next Stage: ', nextStage);
        console.groupEnd();
        return nextStage;
    };
}
