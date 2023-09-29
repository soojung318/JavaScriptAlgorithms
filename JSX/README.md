# JSX
JavaScript XML<br>
React에서 함수형 컴포넌트의 반환값으로 JSX 사용.<br>
<a href="https://react.dev/learn/writing-markup-with-jsx">Writing Markup with JSX</a><br>
<a href="https://transform.tools/html-to-jsx">HTML to JSX</a>

## 주의사항 3가지
1. Component는 꼭 하나의 태그를 반환해야 한다.<br>
   다수의 태그를 반환하고 싶다면 꼭 부모 태그로 감싸야 한다.<br>
   참고) `<Fragment>`와 `<>`는 동일<br>
2. HTML에서는 `class`를 사용하지만, JSX에서는 `className`을 사용한다.
3. 자바스크립트 코드도 작성이 가능하다.<br>
   다만, 자바스크립트로 작성할 때는 중괄호로 묶어주어야 한다.

```
import './App.css';

function App() {
    const name = 'Chris';
    const list = ['우유', '딸기', '바나나', '요거트'];
    return (
        <>
            <h1 className='orange'>{`Hello! ${name}`}</h1>
            <h2>Hello!</h2>
            <p>{name}</p>
            <ul>
                { list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <img style={{width: '200px', height: '200px'}}
                 src='https://images.unsplash.com/...(이하생략)'
                 alt=''
            />
        </>
    );
}

export default App;

```
