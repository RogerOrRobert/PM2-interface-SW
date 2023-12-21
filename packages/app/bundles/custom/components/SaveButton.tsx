import { Save } from '@tamagui/lucide-icons'
import { Button } from 'tamagui'
import { Switch} from "@my/ui"
import { useState, useEffect } from 'react';

export const SaveButton = ({ minero, buttonPressed }) => {
  const [isEnabled, setIsEnabled] = useState(minero.enabled);

  useEffect(() => {
    setIsEnabled((prevEnabled) => {
      if (prevEnabled !== minero.enabled) {
        return minero.enabled;
      }
      return prevEnabled;
    });
  }, [minero.enabled]);

  return (
    <Button onPress={() => buttonPressed('save')} borderColor={'grey'} borderStyle="solid" ml={2} mr={2} width={'$5'}>
      <Switch size={'$1'} checked={isEnabled} onCheckedChange={() => setIsEnabled(!isEnabled)}><Switch.Thumb></Switch.Thumb></Switch>
    </Button>
  );
};

// DataTable2.column("monit", "enabled", true, (row) => <><Switch defaultChecked={row.enabled}><Switch.Thumb></Switch.Thumb></Switch>),

{/* <Button onPress={() => buttonPressed('save')} borderColor={'grey'} borderStyle="solid" ml={2} mr={2}>
      <Switch  defaultChecked={minero.enabled}><Switch.Thumb></Switch.Thumb></Switch>
    </Button> */}