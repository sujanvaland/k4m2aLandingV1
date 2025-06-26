import { useState, useCallback } from 'react';
import { ANDROID_LINK, IOS_LINK } from '../constants/appLinks';

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