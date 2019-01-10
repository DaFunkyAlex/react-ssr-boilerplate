import {isMobile} from 'react-device-detect';

const ivwCode = (isMobile) ? 'code_mobile' : 'code_desktop';
const site = (isMobile) ? 'site_mobile' : 'site_desktop';
const sv = (isMobile) ? 'mo' : 'in';

const IVWPixel = {
    initialize: () => {
        const ivwScript = `if (window.navigator.userAgent.indexOf('Simply') === -1) {
                    var iam_data = {
                        st: '${site}',
                        cp: '${ivwCode}',
                        sv: '${sv}'
                    };
                    iom.c(iam_data);
                }`;
        const script = document.createElement('script');
        script.innerHTML = ivwScript;
        document.head.appendChild(script);
    },
    pageLoad: () => {
        const script = document.createElement('script');
        script.innerHTML = 'iom.c(iam_data,1)';
        document.body.appendChild(script);
    }
};


export default IVWPixel;






