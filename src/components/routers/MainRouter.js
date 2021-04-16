import { Switch, Route } from "react-router-dom";

function MainRouter(props) {
    const forRouting = props.forRouting;

    return (
        <Switch>
            {forRouting.map((part) => {
                return <Route path={part.linkTo}>{part.component}</Route>;
            })}
        </Switch>
    );
}

export default MainRouter;
