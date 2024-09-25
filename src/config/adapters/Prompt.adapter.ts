import prompt from 'react-native-prompt-android';

interface Options {
  title: string;
  subTitle?: string;
  buttons: PromptButton[];
  promptType?: 'default' | 'plain-text' | 'secure-text';
  placeHolder?: string;
  defaultValue?: string;
}

interface PromptButton {
  text: string;
  onPress: () => void;
  style?: 'cancel' | 'default' | 'destructive';
}

export const ShowPrompt = ({
  title,
  subTitle,
  buttons,
  promptType = 'default',
  placeHolder,
  defaultValue = 'test',
}: Options) => {
  prompt(title, subTitle, buttons, {
    type: promptType,
    cancelable: false,
    defaultValue: defaultValue,
    placeholder: placeHolder,
  });
};
