import { useEffect, useState } from 'react';
import { View } from 'react-native';
import WebView, { WebViewMessageEvent } from 'react-native-webview';
import { useGetEmployeeList } from '../../hooks';

const EmployeeListWebViewScreen = () => {
  const [content, setContent] = useState<string>('');
  const {
    employees,
    loadMore,
    getNextPage,
    getPreviousPage,
    nextPage,
    maxPage,
  } = useGetEmployeeList();

  const handleWebViewMessage = (event: WebViewMessageEvent) => {
    console.log('a!!!');
    if (event.nativeEvent.data === 'previousPage') {
      getPreviousPage();
    }
    if (event.nativeEvent.data === 'nextPage') {
      getNextPage();
    }
  };

  useEffect(() => {
    setContent(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Employee list</title>
          <style>
            .container {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 16px;
              padding: 16px;
            }
            .item {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .avatar {
              width: 48px;
              height: 48px;
            }
            .name {
              font-size: 18px;
              font-weight: 600;
            }
            .text {
              margin-top: 4px;
              text-align: center;
            }
            .description {
              font-size: 12px;
            }
            .button {
              padding: 8px 16px;
              border-radius: 6px;
              border: none;
              background-color: lightgreen;
            }
            .pageNumber {
              margin: 0 6px;
            }
            .actionWrapper {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          </style>
        </head>
        <body>
          <div class="actionWrapper">
            <button class="button" id="previousPage" ${
              nextPage - 1 === 1 ? 'disabled' : ''
            }>
              Previous page
            </button>
            <div class="pageNumber">
              <span>page: ${nextPage - 1}</span>
            </div>
            <button class="button" id="nextPage" ${
              nextPage - 1 === maxPage ? 'disabled' : ''
            }>
              Next page
            </button>
          </div>

          <div id="gridWrapper" class="container">
            ${employees
              .map(
                item =>
                  `<div class="item">
                  <img
                    src='https://api.dicebear.com/9.x/pixel-art/png?seed=${
                      item.name
                    }'
                    class="avatar"
                  />
                  <span class="name text">
                    ${item.name}
                  </span>
                  <span class="text">${item.title}</span>
                  <span class="text">
                    ${item.yoe} ${
                    item.yoe === 1 ? 'year' : 'years'
                  } of experience
                  </span>
                  <span class="text description">${item.description}</span>
                </div>`,
              )
              .join('')}
          </div>
          
          <script>
            const previousPage = () => window.ReactNativeWebView.postMessage('previousPage');
            const nextPage = () => window.ReactNativeWebView.postMessage('nextPage');

            function assignButtonOnclick() {
              document.getElementById('previousPage').onclick = previousPage;
              document.getElementById('nextPage').onclick = nextPage;
            }

            assignButtonOnclick();
          </script>
        </body>
      </html>
    `);
  }, [employees, loadMore, nextPage, maxPage]);

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ html: content }}
        style={{ flex: 1 }}
        onMessage={handleWebViewMessage}
      />
    </View>
  );
};

export default EmployeeListWebViewScreen;
