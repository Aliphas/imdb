import { atom } from "recoil";

export const desktop = atom({
  key: 'desktop',
  default: true
})
export const authorized = atom({
  key: 'authorized',
  default: true
})
export const user = atom({
  key: 'user',
  default: 'User'
})

export const mainSlideIndex = atom({
  key: 'mainSlideIndex',
  default: 0
})
export const mainSliderTitles = atom({
  key: 'mainSliderTitles',
  default: null
})


export const featuredTodaySlideIndex = atom({
  key: 'featuredTodaySlideIndex',
  default: 0
})
export const featuredTodayWindowWidth = atom({
  key: 'featuredTodayWindowWidth',
  default: 0
})
export const featuredTodaySliderLeft = atom({
  key: 'featuredTodaySliderLeft',
  default: 0
})

export const imdbOriginalsSlideIndex = atom({
  key: 'imdbOriginalsSlideIndex',
  default: 0
})
export const imdbOriginalsWindowWidth = atom({
  key: 'imdbOriginalsWindowWidth',
  default: 0
})
export const imdbOriginalsSliderLeft = atom({
  key: 'imdbOriginalsSliderLeft',
  default: 0
})

export const funFavoritesSlideIndex = atom({
  key: 'funFavoritesSlideIndex',
  default: 0
})
export const funFavoritesWindowWidth = atom({
  key: 'funFavoritesWindowWidth',
  default: 0
})
export const funFavoritesSliderLeft = atom({
  key: 'funFavoritesSliderLeft',
  default: 0
})

export const primeVideosSlideIndex = atom({
  key: 'primeVideosSlideIndex',
  default: 0
})
export const primeVideosWindowWidth = atom({
  key: 'primeVideosWindowWidth',
  default: 0
})
export const primeVideosSliderLeft = atom({
  key: 'primeVideosSliderLeft',
  default: 0
})

export const activeTitle = atom({
  key: 'activeTitle',
  default: null
})



