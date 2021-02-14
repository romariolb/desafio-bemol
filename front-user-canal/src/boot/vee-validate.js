// import something here
import {
  //configure,
  extend,
  ValidationObserver,
  ValidationProvider
} from 'vee-validate'

import {
  max,
  confirmed,
  email,
  required
} from 'vee-validate/dist/rules'

export default async ({ Vue }) => {
  // Register it globally
  Vue.component('ValidationProvider', ValidationProvider)
  Vue.component('ValidationObserver', ValidationObserver)
}
// Add build-in rules
extend('required', {
  ...required,
  message: 'O campo é obrigatório!'
})
extend('email', {
  ...email,
  message: 'Informe um e-mail válido!'
})

extend('min', {
  validate (value, args) {
    return value.length >= args.length
  },
  params: ['length'],
  message: 'Informe o mínimo {length} de caracteres'
})

extend('max', {
  ...max,
  message: 'Máximo de caracteres permitido!'
})

extend('confirmed', {
  ...confirmed,
  message: 'A senha de confirmação não está igual a informada!'
})
// // Add custom rule
// extend('minMaxValue', {
//   validate: (value, {
//     min,
//     max
//   }) => {
//     return value >= Number(min) && value <= Number(max)
//   },
//   message: (fieldName, {
//     min,
//     max
//   }) => {
//     return `${fieldName} must be between ${min} and ${max}`
//   },
//   params: ['min', 'max']
// })
