import { Switch, Route } from "react-router-dom";

function MainRouter(props) {
    const forRouting = props.forRouting ? props.forRouting : "";

    return (
        <Switch>
            {forRouting.map((part) => {
                return (
                    <Route key={part.id} path={part.linkTo}>
                        {part.component}
                    </Route>
                );
            })}
        </Switch>
    );
}

export default MainRouter;
