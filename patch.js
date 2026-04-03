const fs = require('fs');

const filesToPatch = [
    'm:\\\\Cyapa\\\\Mayank-Portfolio\\\\assets\\\\index-B-zU0UH-.js',
    'm:\\\\Cyapa\\\\Mayank-Portfolio\\\\artifacts\\\\portfolio\\\\dist\\\\public\\\\assets\\\\index-B-zU0UH-.js'
];

for (const file of filesToPatch) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        content = content.replace(
            'Z1=[{name:"SensePath",subtitle:"Intelligent Assistive Navigation System"',
            'Z1=[{name:"SensePath",link:"https://sensepath-idea.vercel.app/",subtitle:"Intelligent Assistive Navigation System"'
        );

        content = content.replace(
            'v.jsx("h3",{style:{color:"white",fontSize:"1.15rem",fontWeight:700},children:E.name})',
            '(E.link ? v.jsx("a", {href: E.link, target: "_blank", style: {color: "white", fontSize: "1.15rem", fontWeight: 700, textDecoration: "underline"}, children: E.name}) : v.jsx("h3",{style:{color:"white",fontSize:"1.15rem",fontWeight:700},children:E.name}))'
        );

        fs.writeFileSync(file, content, 'utf8');
        console.log('Patched: ' + file);
    }
}
