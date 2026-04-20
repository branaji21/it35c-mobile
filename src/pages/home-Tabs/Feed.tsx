import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { chatboxEllipsesOutline, shareOutline, thumbsUpOutline } from "ionicons/icons";

const Feed: React.FC = () => {
    const games= [
        {name :" Pokemon Yellow"},
        {name :"Mega Man X"},
        {name :"The Legend of Zelda"},
        {name :"Pac-man"},
        {name :"Super Mario World"},
        {name :"Bomberman"},
    ]
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

                <IonList>
                    {games.map((item,index) => (
                        <IonItem key={index}>
                            <IonLabel>{item.name} </IonLabel>
                        </IonItem>
                    ))}
                </IonList>

        <IonCard>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
      <IonGrid>
        <IonRow>
            
            <IonCol>   
              <IonButton fill="clear" expand="full">
                    <IonIcon icon={thumbsUpOutline}></IonIcon>
                    <IonLabel style={{ marginLeft: '5px' }}>Like</IonLabel>
                    </IonButton>
          </IonCol>
          <IonCol>   
              <IonButton fill="clear" expand="full">
                    <IonIcon icon={chatboxEllipsesOutline}></IonIcon>
                    <IonLabel style={{ marginLeft: '5px' }}>Comment</IonLabel>
                    </IonButton>
          </IonCol>
          <IonCol>   
              <IonButton fill="clear" expand="full">
                    <IonIcon icon={shareOutline}></IonIcon>
                    <IonLabel style={{ marginLeft: '5px' }}>Share</IonLabel>
              </IonButton>

          </IonCol>
          


        </IonRow>
      </IonGrid>
    </IonCard>
   
               
            </IonContent>
        </IonPage>
    );
};

export default Feed;