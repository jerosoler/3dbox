[![GitHub license](https://img.shields.io/github/license/jerosoler/3dbox)](https://github.com/jerosoler/3dbox/blob/main/LICENSE)


[PLAY](https://jerosoler.github.io/3dbox/)

![Demo](https://github.com/jerosoler/3dbox/raw/master/docs/3dbox.png)

## CDN
```html
<script src="https://cdn.jsdelivr.net/gh/jerosoler/3dbox/THREEDBox.js"></script>
```

## NPM 
```bash
npm install threedbox
```

## How to use

Download `THREEDBox.js` file.

### Javascript:
```javascript
if ('paintWorklet' in CSS && 'registerProperty' in CSS && 'CSSUnitValue' in window) {
    CSS.registerProperty({
        name: '--threedbox-angle-vertical',
        syntax: '<length>',
        initialValue: '10px',
        inherits: false
    });
    CSS.registerProperty({
        name: '--threedbox-angle-horitzontal',
        syntax: '<length>',
        initialValue: '10px',
        inherits: false
    });
    CSS.registerProperty({
        name: '--threedbox-padding',
        syntax: '<length>',
        initialValue: '50px',
        inherits: false
    });
    CSS.registerProperty({
        name: '--threedbox-color',
        syntax: '<color>',
        initialValue: '#ffffff',
        inherits: false
    });
    CSS.registerProperty({
        name: '--threedbox-color-back',
        syntax: '<color>',
        initialValue: '#ffffff',
        inherits: false
    });
    CSS.registerProperty({
        name: '--threedbox-color-border',
        syntax: '<color>',
        initialValue: '#ffffff',
        inherits: false
    });

    CSS.paintWorklet.addModule('THREEDBox.js');
} else {
    console.log("Not Supported");
    alert("Not Supported");
}
```

### CSS 
```css
div {
    padding: 50px;
    --threedbox-color: #ff7d64;
    --threedbox-color-back: #a32107;
    --threedbox-color-border: #ff0000;
    --threedbox-angle-vertical: 15px;
    --threedbox-angle-horitzontal: -15px;
    --threedbox-padding: 50px;
    background-image: paint(threedbox);
}
```