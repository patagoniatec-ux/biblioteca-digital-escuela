import Portal from '../../portal';
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <Portal initial={slug}/>}
