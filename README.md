# wave-fees-calc
Calculate how much you'll really earn processing invoice payments through Wave Accounting (AngularJS/HTML/CSS) 

## The Basics
- Calculates how much you'll make after Wave Accounting's credit card processing fees or their bank transfer fees.
- Calculates using ng-model, scopes. 
- PWA: can be installed in Android (tested on Moto E4 Plus - Android Nougat). 
- Service Worker: offline-caching
- Lighthouse Score: 100

## Up Next
- return $1 for bank invoice input under $100 (wave charges flat $1 fee OR 1%, so under $100 it would just default to $1).
