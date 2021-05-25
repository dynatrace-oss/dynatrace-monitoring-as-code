(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[7136],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6134:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a={id:"intro",sidebar_position:1,title:"What is Monaco?",slug:"/"},l={unversionedId:"intro",id:"version-1.5.3/intro",isDocsHomePage:!1,title:"What is Monaco?",description:"Monaco is CLI tool that tool automates deployment of Dynatrace Monitoring Configuration to one or multiple Dynatrace environments.",source:"@site/versioned_docs/version-1.5.3/intro.md",sourceDirName:".",slug:"/",permalink:"/dynatrace-monitoring-as-code/",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/versioned_docs/version-1.5.3/intro.md",version:"1.5.3",sidebarPosition:1,frontMatter:{id:"intro",sidebar_position:1,title:"What is Monaco?",slug:"/"},sidebar:"version-1.5.3/tutorialSidebar",next:{title:"Install Monaco",permalink:"/dynatrace-monitoring-as-code/installation"}},s=[{value:"Why monaco?",id:"why-monaco",children:[]},{value:"Features",id:"features",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Monaco is CLI tool that tool automates deployment of Dynatrace Monitoring Configuration to one or multiple Dynatrace environments."),(0,i.kt)("h2",{id:"why-monaco"},"Why monaco?"),(0,i.kt)("p",null,"Configuring monitoring and observability be both hard and time consuming to do at scale. Monaco enables Application Teams through self-service capabilities to setup and configure Monitoring and Alerting without causing manual work on the team responsible for monitoring."),(0,i.kt)("p",null,"With monaco, defining what to monitor and what to be alerted on is easy for developers as checking in a monitoring configuration file into version control along with the applications source code. With the next commit or Pull Request the code gets built, deployed and the automatically get the monitoring dashboards and alerting notifications. This self-service model will ensure teams can focus more time on building business services. Monaco eliminates the need of  building a custom monitoring solution that fits into a team's development process and mindset."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Templatize configuration for reusability across multiple environments"),(0,i.kt)("li",{parentName:"ul"},"Handle Interdependencies between configurations without keeping track of unique identifiers"),(0,i.kt)("li",{parentName:"ul"},"Introducing the capability to easily apply \u2013 and update \u2013 the same configuration to hundreds of Dynatrace environments as well as being able to roll out to specific environments"),(0,i.kt)("li",{parentName:"ul"},"Provides an easy way to promote application specific configurations from one environment to another \u2013 following their deployments from development, to hardening to production"),(0,i.kt)("li",{parentName:"ul"},"Supports all the mechanisms and best-practices of git-based workflows such as pull requests, merging and approvals"),(0,i.kt)("li",{parentName:"ul"},"Allows to easily promote configuration from one environment to another following their deployment from development to hardening to production")),(0,i.kt)("p",null,"To get started, install the tool:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/dynatrace-monitoring-as-code/installation"},"Installation")))}u.isMDXComponent=!0}}]);