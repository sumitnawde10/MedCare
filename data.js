// Selects the <div> element with id="myDiv" where search results will be displayed
const divElement = document.getElementById("myDiv");


            
// Function to perform search and display relevant first aid information based on user input
function performSearch () {
  // Get the value of the search input
const searchInput = document.getElementById("searchInput");
const input = searchInput.value; // Get the value of the search input
//data  
if (input === "first aid") {
    
    divElement.innerHTML = `
        <ul>
            <li> 1) When you provide basic medical care to someone experiencing a sudden injury or illness, it's known as first aid.</li>
            <li> 2) In some cases, first aid consists of the initial support provided to someone in the middle of a medical emergency. This support might help them survive until professional help arrives.</li>
            <li> 3) In other cases, first aid consists of the care provided to someone with a minor injury. For example, first aid is often all that's needed to treat minor burns, cuts, and insect stings.</li>
        </ul>
    `;

  } else if (input === "burns") {
    
    divElement.innerHTML = `
    <div style="display: flex;">
        <div style="flex: 1;margin-right: 150px;">
            <ul>
                <li>1) If it's a serious 3rd degree burn:</li>
                <ul>
                    <li>* Contact 102 helpline.</li>
                    <li>* Seek professional medical care.</li>
                </ul>
                <li>2) For treating minor burns:</li>
                <ul>
                    <li>* Wash the burn in cold water.</li>
                    <li>* Apply a cool compress to the area.</li>
                    <li>* Apply LIDOCAINE or an aloe vera gel or cream to reduce discomfort from minor burns.</li>
                    <li>* Avoid applying ice to burned tissue; it can cause more damage.</li>
                    <li>* To help prevent infection, apply an antibiotic ointment.</li>
                    <li>* Loosely cover the burn with clean gauze.</li>
                </ul>
            </ul>
        </div>
        <div style="flex: 1;">
            <img src="https://i.pinimg.com/474x/24/0f/fd/240ffde6a180ce43fa85b68d3855d430.jpg" alt="Burn Image" width="600" height="400">
        </div>
    </div>
`;



  } else if (input === "CPR") {
    
    divElement.innerHTML = `<div style="display: flex;">
    <div style="flex: 1;margin-right: 150px;">
    <ul>
        <li> 1) If you see someone collapse or find someone unconscious, call 102.</li>
        <li>2) If the area around the unconscious person seems safe, approach them and begin CPR.</li>
        <li>3) Even if you don't have formal training, you can use hands-only CPR to help keep someone alive until professional help arrives.</li>
        <li>4) Here's how to treat an adult with hands-only CPR:</li>
        <ol type="1">
            <li>* Place both hands on the center of their chest, with one hand on top of the other.</li>
            <li>* Press straight down to compress their chest repeatedly, at a rate of about 100 to 120 compressions per minute.</li>
            <li>* Compressing the chest to the beat of “Staying Alive” by the Bee Gees or “Crazy in Love” by Beyoncé can help you count at the correct rate.</li>
            <li>* Continue performing chest compressions until professional help arrives.</li>
        </ol>
    </ul>
    </div>
            <div style="flex: 1;">
                <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324712/cpr-step-by-step-visual-guide-illustration.jpg" alt="cpr Image" width="600" height="400">
            </div>
        </div>
`;

  } else  if (input === "nosebleed") {

    divElement.innerHTML=`<div style="display: flex;">
    <div style="flex: 1;margin-right: 150px;">
    <ol>
      <li> 1) Sit down and lean your head forward.</li>
      <li> 2) Using the thumb and index finger, firmly press or pinch the nostrils closed.</li>
      <li> 3) Continue to apply this pressure continuously for five minutes.</li>
      <li> 4) Check and repeat until the bleeding stops.</li>
      <li> 5) If you have nitrile or vinyl gloves, you can press or pinch the nostril closed for them.</li>
    </ol>
    <p> *If the nosebleed continues for 20 minutes or longer, seek emergency medical care. The person should also receive follow-up care if an injury caused the nosebleed.</p>
    </div>
            <div style="flex: 1;">
                <img src="https://www.australiawidefirstaid.com.au/media-library/nose-bleed-chart-1810.png" alt="Burn Image" width="600" height="400">
            </div>
        </div>
  `; 
  } else  if (input === "heatstroke") {

    divElement.innerHTML=`<div style="display: flex;">
    <div style="flex: 1;margin-right: 150px;">
    <p> 1) When your body overheats, it can cause heat exhaustion. If left untreated, heat exhaustion can lead to heatstroke. This is a potentially life-threatening condition and medical emergency.</p>
    <p> 2) If someone is overheated, encourage them to rest in a cool location. Remove excess layers of clothing and try to cool their body down by doing the following:</p>
    <ul>
      <li>*Cover them with a cool, damp sheet.</li>
      <li>*Apply a cool, wet towel to the back of their neck.</li>
      <li>*Sponge them with cool water.</li>
    </ul>
    <p> 3) Call 102 if they develop signs or symptoms of heatstroke, including any of the following:</p>
    <ul>
      <li>*nausea or vomiting</li>
      <li>*mental confusion</li>
      <li>*fainting</li>
      <li>*seizures</li>
      <li>*a fever of 104°F (40°C) or greater</li>
    </ul>
    <p> 3) If they're not vomiting or unconscious, encourage them to sip cool water or a sports drink. Take a moment now to learn about other strategies to help someone with heat exhaustion or heatstroke recover.</p>
    </div>
    <div style="flex: 1;">
        <img src="https://www.firstaidpro.com.au/wp-content/uploads/2022/02/Heatstroke-First-Aid.png" alt="heartstroke Image" width="600" height="400">
    </div>
</div>
`; 
  } else  if (input === "heart attack") {

    divElement.innerHTML=`<div style="display: flex;">
    <div style="flex: 1;margin-right: 150px;">
    <p> 1) If you think someone might be experiencing a heart attack, call 102. If they've been prescribed nitroglycerin, help them locate and take this medication. Cover them with a blanket and comfort them until professional help arrives.</p>
    <p> 2) If they have difficulty breathing, loosen any clothing around their chest and neck. Start CPR if they lose consciousness.</p>
    </div>
            <div style="flex: 1;">
                <img src="https://www.ckbhospital.com/wp-content/uploads/2022/05/First-Aid-during-heart-attack-CPR-Guide-step-by-step-1024x576.jpg" alt="Image" width="800" height="600">
            </div>
        </div>
  `;
; 
  } else  if (input === "babies") {

    divElement.innerHTML=`<div style="display: flex;">
    <div style="flex: 1;margin-right: 150px;">
    <p> 1)To prepare for potential emergencies, it's a good idea to keep a well-stocked first aid kit in your home and car. You can buy preassembled first aid kits or make your own.</p>
    <p> 2)If you have a baby, you might need to replace or supplement some of the products in a standard first aid kit with infant-appropriate alternatives. For example, your kit should include an infant thermometer and infant acetaminophen or ibuprofen.</p>
    <p> 3)It's also important to store the kit in a place where your baby can't reach it.</p>
    <p> 4)Ask your pediatrician or family doctor for more information about infant-friendly first aid.</p>
    </div>
            <div style="flex: 1;">
                <img src="https://cdn2.vectorstock.com/i/1000x1000/95/66/first-aid-rescue-emergency-treatment-for-baby-vector-35949566.jpg" alt=" Image" width="600" height="400">
            </div>
        </div>
  `;
  } else  if (input === "choking") {

    divElement.innerHTML=`<div style="display: flex;">
    <div style="flex: 1;margin-right: 150px;">
    <p><strong> 1) Mild Choking: encourage them to cough</strong></p>
    <p>If the airway is only partly blocked, the person will usually be able to speak, cry, cough, or breathe.</p>
    <p>They'll usually be able to clear the blockage themselves.</p>
    <p>To help with mild choking in an adult:</p>
    <ul>
      <li>Encourage them to keep coughing to try to clear the blockage.</li>
      <li>Ask them to try to spit out the object if it's in their mouth.</li>
      <li>Don't put your fingers in their mouth to help them as they may bite you accidentally.</li>
    </ul>
    
    <p><strong> 2) Severe choking: back blows and abdominal thrusts</strong></p>
    <p>Where choking is severe, the person won't be able to speak, cry, cough, or breathe. Without help, they'll eventually become unconscious.</p>
    <p>To carry out a back blow on an adult:</p>
    <ul>
      <li>Stand behind them and slightly to one side. Support their chest with 1 hand. Lean them forward so the object blocking their airway will come out of their mouth, rather than moving further down.</li>
      <li>Give up to 5 sharp blows between their shoulder blades with the heel of your hand. The heel is between the palm of your hand and your wrist.</li>
      <li>Check if the blockage has cleared.</li>
      <li>If not, give up to 5 abdominal thrusts.</li>
    </ul>
    
    <p><strong> 3) Abdominal thrusts</strong></p>
    <p>Don't give abdominal thrusts to babies under 1 year old or pregnant women.</p>
    <p>To carry out an abdominal thrust:</p>
    <ul>
      <li>Stand behind the person who's choking.</li>
      <li>Place your arms around their waist and bend them forward.</li>
      <li>Clench 1 fist and place it right above their belly button.</li>
      <li>Put the other hand on top of your fist and pull sharply inwards and upwards.</li>
      <li>Repeat this movement up to 5 times.</li>
    </ul>
    
    <p> * If the person's airway is still blocked after trying back blows and abdominal thrusts, get help immediately:</p>
    <ul>
      <li>Call 102 and ask for an ambulance. Tell the 102 operator the person is choking.</li>
      <li>Continue with the cycles of 5 back blows and 5 abdominal thrusts until help arrives.</li>
      <li>If they lose consciousness and aren't breathing, you should begin cardiopulmonary resuscitation (CPR) with chest compressions.</li>
    </ul>
    
    <p><strong> **Complications</strong></p>
    <p>Get urgent medical help at an A&E, NHS walk-in centre, or a GP if:</p>
    <ul>
      <li>They have a persistent cough after choking.</li>
      <li>They feel something is still stuck in their throat.</li>
    </ul>
    <p>Abdominal thrusts can cause serious injuries. A health professional such as your GP or a doctor in A&E should always examine someone after they have received abdominal thrusts.</p>
    </div>
    <div style="flex: 1;">
        <img src="https://m.media-amazon.com/images/I/9115i1ZTZGL._AC_UF1000,1000_QL80_.jpg" alt=" Image" width="600" height="400">
    </div>
</div>
`;
  } else  if (input === "poisoning") {

    divElement.innerHTML=`<div style="display: flex;">
    <div style="flex: 1;margin-right: 150px;">
    <p><strong>If someone may have been poisoned, call the toll-free Poison Help line (1-800-222-1222), which connects you to your local poison center, to speak with a poison expert right away. This expert can give you advice on first aid and may save you from a visit to the emergency room.</strong></p>
    <p>Below is a checklist to help you in the event of poisoning:</p>
    <p><strong>First steps</strong></p>
    <ul>
      <li>If the person is not breathing, call 911.</li>
      <li>If the person inhaled poison, get him or her fresh air right away.</li>
      <li>If the person has poison on the skin, take off any clothing the poison touched. Rinse skin with running water for 15 to 20 minutes.</li>
      <li>If the person has poison in the eyes, rinse eyes with running water for 15 to 20 minutes.</li>
      <li>Do not use activated charcoal when you think someone may have been poisoned.</li>
    </ul>
    
    <p><strong>Calling Poison Help</strong></p>
    <p>Do not wait for signs of poisoning before calling Poison Help (1800-425-1213), which connects you to your local poison center.</p>
    <ul>
      <li>Stay calm. Not all medicines, chemicals, or household products are poisonous. Not all contact with poison results in poisoning.</li>
      <li>Make sure to have the container of the product you think caused the poisoning nearby. The label has important information.</li>
      <li>Be ready (if you can) to tell the expert on the phone:</li>
      <ul>
        <li>The exposed person,s age and weight</li>
        <li>Known health conditions or problems</li>
        <li>The product involved</li>
        <li>How the product contacted the person (for example, by mouth, by inhaling, through the skin, or through the eyes)</li>
        <li>How long ago the poison contacted the person</li>
        <li>What first aid has already been given</li>
        <li>Whether the person has vomited</li>
        <li>Your exact location and how long it would take you to get to a hospital</li>
      </ul>
    </ul>
    
    <p><strong>Help prevent poisonings</strong></p>
    <ul>
      <li>Learn how to poison-proof your home and reduce the risk of poisonings.</li>
      <li>Talk about poisons so others know what to do, too.</li>
      <li>Follow these winter, spring, summer, and fall tips on how to prevent poisonings throughout the year and throughout a lifetime.</li>
      <li>Prevent pill abuse and theft by ridding your home of potentially dangerous expired, unused, and unwanted prescription drugs.</li>
    </ul>
    </div>
            <div style="flex: 1;">
                <img src="https://www.ohsu.edu/sites/default/files/2018-09/first%20aid%20for%20poisoning%20opc.jpg" alt="Burn Image" width="600" height="400">
            </div>
        </div>
  `;
  } else  if (input === "emergency situation") {

    divElement.innerHTML=`<div style="display: flex;">
    <div style="flex: 1;margin-right: 150px;">
    <p><strong>If you encounter an emergency situation, follow these three basic steps:</strong></p>
    <ol>
      <li>
        <p><strong> 1) Check the scene for danger</strong></p>
        <p>Look for anything that might be dangerous, like signs of fire, falling debris, or violent people. If your safety is at risk, remove yourself from the area and call for help.</p>
        <p>If the scene is safe, assess the condition of the sick or injured person. Don't move them unless you must do so to protect them from danger.</p>
      </li>
      <li>
        <p><strong> 2) Call for medical help, if needed</strong></p>
        <p>If you suspect the sick or injured person needs emergency medical care, tell a nearby person to call 911 or the local number for emergency medical services. If you're alone, make the call yourself.</p>
      </li>
      <li>
        <p><strong> 3) Provide care</strong></p>
        <p>If you can do so safely, remain with the sick or injured person until professional help arrives. Cover them with a warm blanket, comfort them, and try to keep them calm. If you have basic first aid skills, try to treat any potentially life-threatening injuries they have.</p>
        <p>Remove yourself from danger if at any point in the situation you think your safety might be at risk.</p>
      </li>
    </ol>
    </div>
            <div style="flex: 1;">
                <img src="https://img.freepik.com/premium-vector/fainting-first-aid-what-emergency-situation_277904-4178.jpg?w=2000" alt=" Image" width="600" height="400">
            </div>
        </div>
  `;
  } else if (input === "cancer") {

    divElement.innerHTML = "Cancer is a group of diseases characterized by the uncontrolled growth and spread of abnormal cells in the body. These cells can form tumors and interfere with normal body functions. There are various types of cancer, each named after the organ or tissue where the abnormal growth initially occurs. Some common types include breast cancer, lung cancer, prostate cancer, and leukemia.<br><br>" +
        "<b>Types of Cancer:</b><br>Cancer can be broadly categorized into four main types based on the affected cell or tissue: carcinomas, sarcomas, leukemias, and lymphomas. Carcinomas originate in the epithelial cells that cover or line surfaces of the body, while sarcomas develop in connective tissues like bones, muscles, and blood vessels. Leukemias affect the blood and bone marrow, and lymphomas involve the lymphatic system.<br><br>" +
        "<b>Symptoms of Cancer:</b><br>The symptoms of cancer can vary widely depending on the type and stage of the disease. Common signs may include:<br>" +
        " - Unexplained weight loss<br>" +
        " - Fatigue<br>" +
        " - Persistent pain<br>" +
        " - Changes in the skin, such as yellowing or darkening<br>" +
        " - Changes in bowel or bladder habits<br>" +
        " - Persistent cough or difficulty swallowing<br>" +
        " - Lumps or thickening of the skin or underlying tissues<br>" +
        " - Changes in moles or skin sores that don't heal<br>" +
        "It's important to note that these symptoms can also be caused by conditions other than cancer, but persistent or unusual symptoms should be evaluated by a healthcare professional.<br><br>" +
        "<b>Prevention and Early Detection:</b><br>While there is no guaranteed way to prevent cancer, certain lifestyle choices can reduce the risk. These include:<br>" +
        " - Avoiding tobacco products<br>" +
        " - Maintaining a healthy diet<br>" +
        " - Regular exercise<br>" +
        " - Limiting alcohol consumption<br>" +
        " - Protecting the skin from sun exposure<br>" +
        " - Getting vaccinated against certain infections associated with cancer (e.g., HPV, hepatitis B)<br>" +
        "Early detection through regular screenings can significantly improve the chances of successful treatment. Screening tests may include mammograms, Pap smears, colonoscopies, and prostate-specific antigen (PSA) tests, among others.<br><br>" +
        "<b>Treatment:</b><br>Cancer treatment depends on the type, stage, and location of the cancer, as well as the overall health of the patient. Common treatment modalities include surgery, chemotherapy, radiation therapy, immunotherapy, targeted therapy, and hormone therapy. The choice of treatment or combination of treatments is determined by a multidisciplinary team of healthcare professionals.<br><br>" +
        "Curing cancer is a complex challenge, and success rates depend on various factors. Advances in research and technology continue to improve our understanding of cancer and enhance treatment options. Early diagnosis, lifestyle choices, and ongoing research efforts are crucial elements in the collective fight against cancer."
        "<div style='flex: 1;'>" +
        "<img src='' alt='Image' width='600' height='400'>" +
        "</div>" 
        ;


  } else  if (input === "") {

    divElement.innerHTML="";
  } else  if (input === "") {

    divElement.innerHTML="";
  } else  if (input === "") {

    divElement.innerHTML="";
  } else  if (input === "") {

    divElement.innerHTML="";
  } else  if (input === "") {

    divElement.innerHTML="";
  } else  if (input === "") {

    divElement.innerHTML="";
  } else  if (input === "") {

    divElement.innerHTML="";
  } else  if (input === "") {

    divElement.innerHTML="";
  } else  if (input === "") {

    divElement.innerHTML="";
  } else  if (input === "") {

    divElement.innerHTML="";
  } else  if (input === "") {

    divElement.innerHTML="";
  } else  if (input === "") {

    divElement.innerHTML="";
  } else  if (input === "") {

    divElement.innerHTML="";
  } else  if (input === "") {

    divElement.innerHTML="";
  } else {
    
    divElement.textContent="*wrong symptoms or not a firstaid applicant...call your medical guidances or call 102*";
  }
}


