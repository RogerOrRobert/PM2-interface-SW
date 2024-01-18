import { Button } from 'tamagui'
import { Save } from '@tamagui/lucide-icons'
import { API } from 'protolib'

// USE INSTRUCTIONS: 1st start the service, then click on save all to save all the services

export function SaveAllServices({ elements }) {
  const buttonPressed = async () => {
    for (const minero of elements.data.items) {
      if (minero.id) {
        try {
          let enabled = await API.get('/api/v1/services/' + minero.id);   
          // console.log("miner: ", minero.id, "enabled: ", enabled.data.enabled)      
          minero.enabled = true
          await API.post('/api/v1/services/' + minero.id, minero);                   
        } catch (error) {
          console.error('Error when making the request to the server:', error);
        }   
      }
    }
    console.log("All saved");
  };
  
  return (
    <>
      <Button hoverStyle={{ o: 1 }} o={0.7} circular onPress={buttonPressed} chromeless={true}>
        <Save />
      </Button>
    </>
  );
}