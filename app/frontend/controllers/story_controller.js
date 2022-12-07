import { Controller } from "stimulus"
import axios from "axios"


export default class extends Controller {
  static targets = [ "clapCount" ]

  addClap(event){
    event.preventDefault();
    let slug = event.currentTarget.dataset.slug
    let target = this.clapCountTarget
    // this.clapCountTarget.innerHTML = 'aaa'
    axios.post(`/stories/${slug}/clap`)
        .then(function(response){
            let status = response.data.status
            switch (status){
                case 'sign in first':
                    alert("請先登入");
                    break
                default:
                    target.innerHTML= status;
            }
        })
        .catch(function(error){
            console.log(error)
        })
  }
}
