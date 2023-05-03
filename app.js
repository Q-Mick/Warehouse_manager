const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

// our filter object to determine which filters are in use
let filter = {
    heavy: false,
    priority: false,
    fragile: false
  }


/** 
 * This will set the filters to on or off
 * @param filter
 */  
function updateFilter(button){
  console.log(button)
  switch(button){
    case 'default':
      filterPackages(packages, filter)
      break;
    case 'heavy':
      filter.heavy == true ? filter.heavy = false : filter.heavy = true
      let element = document.getElementById("filter-heavy")
      if (filter.heavy){
          element.classList.remove("btn-primary")
          element.classList.remove("text-white")
          element.classList.add("text-black")
          element.classList.add("btn-light")
          console.log('toggled button on')
          } else {
          element.classList.remove("text-black")
          element.classList.remove("btn-light")
          element.classList.add("btn-primary")
          element.classList.add("text-white")      
          console.log('toggled button off')
          }
          filterPackages(packages, filter)
          break;

          case 'priority':
      filter.priority == true ? filter.priority = false : filter.priority = true
      let element2 = document.getElementById("filter-priority")
      if (filter.priority){
          element2.classList.remove("btn-primary")
          element2.classList.remove("text-white")
          element2.classList.add("text-black")
          element2.classList.add("btn-light")
          console.log('toggled button on')
          } else {
          element2.classList.remove("text-black")
          element2.classList.remove("btn-light")
          element2.classList.add("btn-primary")
          element2.classList.add("text-white")    
          console.log('toggled button off')  
          }
          filterPackages(packages, filter)
          break;

          case 'fragile':
      filter.fragile == true ? filter.fragile = false : filter.fragile = true
      let element3 = document.getElementById("filter-fragile")
      if (filter.fragile){
          element3.classList.remove("btn-primary")
          element3.classList.remove("text-white")
          element3.classList.add("text-black")
          element3.classList.add("btn-light")
          console.log('toggled button on')
          } else {
          element3.classList.remove("text-black")
          element3.classList.remove("btn-light")
          element3.classList.add("btn-primary")
          element3.classList.add("text-white")      
          }
          filterPackages(packages, filter)
          break;
} 
}

function filterPackages(packages, filter){
  let filteredPackages = packages
  if (filter.heavy) {
    filteredPackages = filteredPackages.filter((pkg) => pkg.weight >= 5)
    
  }

  if (filter.priority) {
    filteredPackages = filteredPackages.filter((pkg) => pkg.priorityLevel === "express")
  }

  if (filter.fragile) {
    filteredPackages = filteredPackages.filter((pkg) => pkg.isFragile)
  }
  console.log(filteredPackages)
  drawPackages(filteredPackages)
  return filteredPackages
}


function drawPackages(packages) {
  console.log(packages.length);
  document.getElementById("packages").innerHTML = ""
  for (let i = 0; i < packages.length; i++){
      document.getElementById("packages").innerHTML += `<li class=list-group-item> Shipping to:${packages[i].to}, ${packages[i].weight} lbs, Priority level: ${packages[i].priorityLevel}</li>`
}

}