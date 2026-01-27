import { useEffect } from 'react';
import { useConsent } from '../contexts/ConsentContext';

export function ScriptLoader() {
  const { checkConsent, hasConsent } = useConsent();

  useEffect(() => {
    if (!hasConsent) {
      return;
    }

    if (checkConsent('analytics')) {
      loadAnalyticsScripts();
    }

    if (checkConsent('marketing')) {
      loadMarketingScripts();
    }
  }, [hasConsent, checkConsent]);

  return null;
}

function loadAnalyticsScripts() {
  if (typeof window === 'undefined') return;

  if ((window as any).gtag) {
    return;
  }

  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
  document.head.appendChild(gtagScript);

  const gtagConfigScript = document.createElement('script');
  gtagConfigScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `;
  document.head.appendChild(gtagConfigScript);
}

function loadMarketingScripts() {
  if (typeof window === 'undefined') return;

  if ((window as any).fbq) {
    return;
  }

  const fbPixelScript = document.createElement('script');
  fbPixelScript.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(fbPixelScript);

  const fbNoScript = document.createElement('noscript');
  fbNoScript.innerHTML = `<img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>`;
  document.body.appendChild(fbNoScript);
}
