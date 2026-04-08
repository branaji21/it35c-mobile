import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from "@ionic/react";
import { homeOutline, informationOutline, settingsOutline } from "ionicons/icons";
import Home from "./Home";
import { Redirect, Route } from "react-router";
import Page1 from "./Page1";
import Page2 from "./Page2";
const Menu: React.FC = () => {
    const path = [
        { name: "Home", url: '/app/home', icon: homeOutline },
        {name:'Page1', url:"/app/page1",icon:settingsOutline},
        {name:'Page2', url:"/app/page2",icon:informationOutline}

    ]
    return (

        <IonPage>
            <IonSplitPane contentId="main">
                <IonMenu contentId="main">
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>
                                Menu
                            </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        {path.map((Item, index) => (
                            <IonMenuToggle key={index}>
                                <IonItem routerLink={Item.url} routerDirection="forward" >
                                    <IonIcon icon={Item.icon} slot="start"></IonIcon>
                                        {Item.name}
                                </IonItem>
                            </IonMenuToggle>
                        )

                        )}
                            <IonButton routerLink="/" routerDirection="back" expand="full">
                            Logout

                        </IonButton>
                    </IonContent>
                </IonMenu>

                <IonRouterOutlet id="main">
                    <Route exact path="/app/home" component={Home} />
                    <Route exact path="/app">
                        <Redirect to="/app/home" />
                    </Route>
                    <Route exact path="/app/page1" component={Page1} />
                    <Route exact path="/app/page2" component={Page2} />
                </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>
    )



};

export default Menu;