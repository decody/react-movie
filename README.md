# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Working on Json-server 
`json-server --watch db.json --port 4000`
https://github.com/typicode/json-server

웹상에서 제이슨 서버 기동
https://my-json-server.typicode.com/


axios to react
https://www.freecodecamp.org/news/how-to-use-axios-with-react/

## 잔여 개발
[x] 아이템 생성
[x] 아이템 수정
[x] 아이템 삭제
[x] 필터, 정렬, 검색
[-] 옵션: 파일첨부 기능
[x] SearchBox 컴포넌트에서 호출 버튼 분리

[x] initialValueForUpdate 에 movie 체크 => movie? 표시
[x] isEdit 플래그
    [x] movie 존재유무 체크로 대체 가능
    [x] SearchBox에서 선언 불필요
[x] validateMessages label
[x] movie 객체 그대로 넘기기
    [x] initialValues={movie}
    [x] POST / PATCH payload


Image File Attachment
https://cloudinary.com/documentation/image_upload_api_reference

Catemate EditModal from Couch Coding
https://github.com/sungeun101/cafemate/blob/main/front/src/components/EditModal.js


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### 리액트 하위 컴포넌트에서 상위 컴포넌트로 데이터 올리는 방법

```javascript
const { useState } = React;

function PageComponent() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <ChildComponent onClick={increment} count={count} />         
      <h2>count {count}</h2>
      (count should be updated from child)
    </div>
  );
}

const ChildComponent = ({ onClick, count }) => {
  return (
    <button onClick={onClick}>
       Click me {count}
    </button>
  )
};

ReactDOM.render(<PageComponent />, document.getElementById("root"));


export default function HigherComponent() {
	const [text, setText] = useState('');

  	function onChangeText(e) {
    	setText(e.target.value)
    }
  
 	return (<LowerComponent propsFunction={onChangeText} />)
}
export default function LowerComponent({propsFunction}) {

 	return (<input onChange={propsFunction} />)
```


이것의 본질은 props 로 내려주는 것이 data가 아니라 function 이라는 것이다. 
그게 본질이다. 너무 어렵게 설명을 이리저리 했던 것 같다. 내가 이해한 본질은 이러했다.

 

리액트를 쓰다보면 parent의 props에 속성 값을 보내서, child에서 처리하는 것 뿐만아니라,

child에서 처리한 것을 부모로 보내주어야 할 때가 있다.

아래와 같이 부모로 부터 전달받은 setter (function)를 통해 전달할 데이터를 저장하면 된다.

```javascript
// parent
const parent = () => {

	const [htmlData, setHtmlData] = useState(0);
	return <TextEditor setHtmlData={setHtmlData}/>

}
// child
const TextEditor = (props) => {
	props.setHtmlData(getContentHTML);
}
```
props는 순수함수여야 하기 때문에 그러하다.