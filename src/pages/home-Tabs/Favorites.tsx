import { IonButton, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const Favorites: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton>
                       <IonMenuButton></IonMenuButton>
                       <IonTitle>Favorites</IonTitle>
                    </IonButton >
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>Favorites</h1>
            </IonContent>
        </IonPage>
    );
};

export default Favorites;