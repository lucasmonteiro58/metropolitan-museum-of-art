import type { IObject } from '@/types/IObject'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const obj = ref<IObject>({} as IObject)
  const showing = ref(false)

  function showModal(object: IObject) {
    obj.value = object
    showing.value = true
  }

  function hideModal() {
    showing.value = false
  }

  return {
    obj,
    showing,
    showModal,
    hideModal
  }
})
