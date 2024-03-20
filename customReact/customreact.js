function customRender(reactElement, container){
    // //*creating dom element through reactElement
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    //key-> prop & object-> props
    for (const prop in reactElement.props) {
        if(prop === 'children') continue ;
        //setting the attribute called prop by asking its value from reactElement.props by passing the key 'prop'.
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

//*To inject the element "reactElement" under root"
customRender(reactElement , mainContainer) //methode called customRender is injecting reactElement in mainContainer.