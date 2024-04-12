const resProperties = await fetch(`http://localhost:3030/properties`);
export const propertiesDatas = await resProperties.json();

const resAboutDatas = await fetch(`http://localhost:3030/aboutDatas`);
export const aboutDatas = await resAboutDatas.json();
