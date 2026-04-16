import { IonButton, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const Template: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton>
                       <IonMenuButton></IonMenuButton>
                       <IonTitle>Template</IonTitle>
                    </IonButton >
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>Template</h1>
            </IonContent>
        </IonPage>
    );
};

export default Template;