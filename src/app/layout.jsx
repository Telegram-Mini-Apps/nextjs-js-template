import { Root } from '@/components/Root/Root';

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css/normalize.css';
import './_assets/globals.css';

export const metadata = {
  title: 'Your Application Title Goes Here',
  description: 'Your application description goes here',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      <Root>
        {children}
      </Root>
    </body>
    </html>
  );
}
