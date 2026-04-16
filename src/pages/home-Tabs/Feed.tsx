import { IonButton, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const Feed: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton>
                       <IonMenuButton></IonMenuButton>
                       <IonTitle>Feed</IonTitle>
                    </IonButton >
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>Feed</h1>
            </IonContent>
        </IonPage>
    );
};

export default Feed;