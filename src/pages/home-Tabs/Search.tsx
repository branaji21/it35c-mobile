import { IonButton, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const Search: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton>
                       <IonMenuButton></IonMenuButton>
                       <IonTitle>Search</IonTitle>
                    </IonButton >
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>Search</h1>
            </IonContent>
        </IonPage>
    );
};

export default Search;