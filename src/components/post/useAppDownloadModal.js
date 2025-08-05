import { useState, useCallback } from 'react';

const ANDROID_LINK = 'https://play.google.com/store/apps/details?id=com.k4m2a&hl=en_IN';
const IOS_LINK = 'https://apps.apple.com/in/app/k4m2a/id6743112577';

function getOS() {
  if (typeof navigator === 'undefined') return { isAndroid: false, isIOS: false };
  const ua = navigator.userAgent;
  return {
    isAndroid: /Android/i.test(ua),
    isIOS: /iPhone|iPad|iPod/i.test(ua),
  };
}

export default function useAppDownloadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAndroid, isIOS } = getOS();

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const getAppLink = useCallback(() => {
    if (isAndroid) return ANDROID_LINK;
    if (isIOS) return IOS_LINK;
    return '#';
  }, [isAndroid, isIOS]);

  return { isOpen, openModal, closeModal, isAndroid, isIOS, getAppLink };
} 