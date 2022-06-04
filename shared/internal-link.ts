import router from "next/router";


const internalLink = (route: string, routeType: string) => {
  let r: string = '';
  routeType === 'post' 
    ? r = 'blog/' + route 
    : r = route;
  router.push(route === 'root' ? '/' : '/' + r);
}

export default internalLink