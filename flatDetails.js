function fetchData() {
    fetch("https://raw.githubusercontent.com/jasvinderkhera/Fake-Server/main/FlatMateFlats.json").then(response => response.json()).then((data) => {
        console.log(data)


        let flats_container = document.querySelector(".flats_container")
        let sortData = document.querySelector("#sortData")

        function displayData(sortedData){
          flats_container.innerHTML = ""
          for (let i = 0; i < sortedData.length; i++) {

            flats_container.innerHTML += `
        <div class="flats ps-2 pe-1 py-2">
            <div class="img_container">
              <img src="${sortedData[i].url}" alt="" height="200" width="266">
            </div>
            <div class="flat_details pt-4">
              <h5>${sortedData[i].flat_area} <span><i class="fa-solid fa-arrow-up-right-from-square text-secondary"></i></span></h5>
              <p class="text-secondary">${sortedData[i].flat_address}</p>
              <div class="ammenities d-flex gap-2 align-items-center">
                <span class="text-success fw-bold">FREE AMENITIES</span>
                <div class="horizon_div"></div>
              </div>
              <div class="facilitiess d-flex gap-4 pb-3">
              </div>
               </div>
            <div class="rent d-flex align-items-center">
              <div class="prices py-2 px-2">
                <p class="mb-1">Rent Starting From</p>
                <p class="fs-6">₹<b>${sortedData[i].rent}/month</b></p>
              </div>
              <div class="help pb-2 ps-2">
                <p class="mb-1">Need help?</p>
                <span class="req_callback">Request callback</span>
              </div>
            </div>
          </div>
        `

            // for (let j = 0; j < data[i].facilities.length; j++) {
            //     let facilitiess = document.querySelector(".facilitiess")
            //     facilitiess.innerHTML += `
            //  <div class="box">
            //       <img src="${data[i].facilities[j].image}" alt="" height="20" width="20">
            //       <p>${data[i].facilities[j].facility_name}</p>
            //     </div>
            // `
            // }
        }
        }

        function convertRentToNumber(rent){
            return Number(rent.replace(/,/g,""))
        }

        displayData(data)

        sortData.addEventListener("change",function(){
          let sortedData = [...data]
          if(sortData.value === "lowToHigh"){
            sortedData.sort((a,b)=> convertRentToNumber(a.rent) - convertRentToNumber(b.rent))
          }
          if(sortData.value === "highToLow"){
            sortedData.sort((a,b)=> convertRentToNumber(b.rent) - convertRentToNumber(a.rent))
          }

          displayData(sortedData)
        })
    })
}

fetchData()



{/* <div class="flats ps-2 pe-1 py-2">
            <div class="img_container">
              <img src="https://hw-production-compressed-image.s3.ap-south-1.amazonaws.com/property/828/srp/desktop/1694515761NDSC_4298.JPG.jpeg" alt="" height="200" width="266">
            </div>
            <div class="flat_details pt-4">
              <h5>FlatMate VasantKunj <span><i class="fa-solid fa-arrow-up-right-from-square text-secondary"></i></span></h5>
              <p class="text-secondary">Kishangarh,Near Fortis Hospital,New Delhi</p>
              <div class="ammenities d-flex gap-2 align-items-center">
                <span class="text-success fw-bold">FREE AMENITIES</span>
                <div class="horizon_div border border-top-1"></div>
              </div>
              <div class="facilities d-flex gap-4 pb-3">
                <div class="box">
                  <img src="https://hw-prod-static-assets.s3.ap-south-1.amazonaws.com/amenities/Internet.png" alt="" height="20" width="20">
                  <p>Internet</p>
                </div>
                <div class="box">
                  <img src="https://hw-prod-static-assets.s3.ap-south-1.amazonaws.com/amenities/Water.png" alt="" height="20" width="20">
                  <p>Water</p>
                </div>
              </div>
              
            </div>
            <div class="rent d-flex align-items-center">
              <div class="prices py-2 px-2">
                <p class="mb-1">Rent Starting From</p>
                <p class="fs-6">₹<b>25,000/month</b></p>
              </div>
              <div class="help pb-2 ps-2">
                <p class="mb-1">Need help?</p>
                <span class="req_callback">Request callback</span>
              </div>
            </div>
          </div> */}