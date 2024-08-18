import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

import './recyclerPage.css'

import FourthImg from '../../Images/service.jpg'
import Recovery from '../../Images/recovery.jpg'
import Hardware from '../../Images/hardware.jpg'
import Footer from '../../Components/Footer/Footer'

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? '#fffff6'
      : '#fffff6',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function RecyclerPage() {

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  return (
    <div className="recycler-outer-container">
      <Navbar />
      <div className="fourth-container">
          <div className="fourth-container-card">
            <div className="fourth-left-content">
              <h1 className="fourth-title">Recycling Electronic Waste.</h1>
              <p className="fourth-description-recyc">
              Hitech Electronic Waste Recycler India Private Limited focuses on promoting electronics reuse to refurbish and redistribute IT equipment to schools, nonprofits, and low-income families, creating local jobs and reducing landfill waste. When reuse isn’t possible, electronics are dismantled by trained workers in their recycling warehouse.
              </p>
            </div>
            <div className="fourth-right-content">
              <img src={FourthImg} alt="" className="fourth-container-img" />
            </div>
          </div>
        </div>
        <div className="qna-section-contas">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>What is the problem?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            What is E-Waste?
              Waste electrical and electronic equipment, whole or in part or rejects from their manufacturing and repair process, which is intended to be discarded. It includes objects such as computers, television, VCR's, stereos, copiers, fax machines, cell phones, AC's, refrigerator etc..

              What is the Problem?
              India generated around 4, 00, 000 Tonnes of E waste (2011) and it's obvious that not all of it reaches for safe handling. As product they are not harmful but once they are dismantled or recycled in an inappropriate manner (using crude and hazardous methods like treatment with acids, open burning etc. for extraction of precious metals, these can cause extensive harm to the environment and human health. E-waste contains over 1000 different substances; most of it are toxic and potentially hazardous. Absence of appropriate collection/disposal systems. Huge gap between generation and recycling of e-waste

              Why you have to approach authorised collection Agencies?
              As per e-waste (Management and Handling) Rules 2011 it's the responsibility of producer to ensure safe disposal of e-waste. We approach the bulk consumers to maximize the collection of e-waste. However, everyone who uses electric/electronic equipment is our valuable client. So please give us e-waste and we will take care.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>What we do?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            The Process
              We at HITECH ELECTRONIC WASTE RECYCLERS INDIA Pvt Ltd. carry out...

              Waste Collection
              E-waste is collected from households, offices, businesses, bulk consumers etc. from the Delhi region. Thereon, we take up the responsibility of the transportation of this waste from its location and waste collection center, to our unit.

              Waste Segregation
              Once the E-waste has been brought to our unit, it is segregated on the basis of its contents. Monitors, Keyboards, Telephones, Batteries, Hard Drives etc., are segregated and all placed separately.

              Waste Storage
              Once the E-waste has been segregated on the basis of its contents, it is stored in its respective places. Bins and storage racks are maintained for the purpose of proper and safe storage of these waste products at our unit.

              Waste Dispatch
              Once the above process is completed, the E-waste is dispatched to authorized and formal E-waste dismantling and recycling units. They then carry out their own processes and activities in the chain of waste management. We do not carry out the process of Dismantling and Recycling of E-waste.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Why recycle?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Why Recycle?
              Recycling is the process of collecting, segregating and processing of used materials and products into re-usable products. This process prevents waste accumulation as well as reduces the strain on the environment to meet the ever increasing demands for products and amenities of the people. In recent times, it has been realized, that the actions and lifestyle of man in the past has led to extensive degradation of our environment. Vital resources natural products, necessary for human existence are now running short, and are on the verge of eventual exhaustion. Inconsiderate production and waste generation has changed the world into a dump yard, with no place left to dispose of our waste in an eco-friendly way. These pollution levels have highly exacerbated the issues of Global Warming, Rising water levels, increased risks of disasters, and hence pose a threat to humankind. Recycling is one of the efforts, thought to be able to combat this situation and possibly move the world backwards, into a less degraded state. Commodities such as glass, metals, plastics, textiles, electronics, etc., which are part of our daily consumption and needs, are all made using the raw materials and resources provided to us by nature. The production processes of these goods require a lot of electricity, fuel and energy, which are very valuable and now also, scarce resources for us. In addition, these processes contribute massively to the pollution levels and environmental degradation. The process of Recycling helps avoid these practices. Recycling is the conversion of the used up commodities of our daily use, into new products. This helps to avoid another cycle of the production process as resources and raw materials are readily available and do not need to be extracted or processed once again. Also we forego the entire process of waste disposal, a major contributor to environmental pollution (landfilling and incineration) and degradation. Hence, Recycling is considered as one of the most vital parts of the waste disposal process and is the third rung of the 3 R's approach of 'Reduce. Reuse. Recycle.'

            Why recycle E-waste?
              E-waste or Waste Electrical and Electronic Equipments (WEEE) can be defined as electrical or electronic goods and equipments which are no longer of use or have become obsolete. These equipments may include computers, refrigerators, microwave-ovens, mobile phones, telephones, televisions, and all other electronic goods. These products contain many recoverable and valuable components like aluminum, copper, steel, gold, silver, plastic and ferrous materials. These are scarce natural resources which need to be preserved and reused. Hence, by extracting them from E-waste, recyclers are able to reduce the pressure on the environment of providing resources for new goods and also mitigate the need for waste disposal. These products may also contain certain components which may harm individuals and the environment around them, such as lead, beryllium, chromium, mercury etc., which if disregarded could get mixed into the environment and pollute our land and water resources, hence ultimately harming us and the environment. These are the reasons which have made E-waste management and recycling an absolutely vital process.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Benefits of recycling</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Benefits of recycling
            Recycling has some very evident and noticeable benefits and contributions to the environment and humankind as well:
            Recycling helps reduce waste : Recycling is a major contributor to the reduction of waste materials and hence to the need of waste disposal, a major contributor to pollution. The waste disposal process entails massive levels of pollution and wastage of very valuable resources. Hence Recycling is a major instrument in the preservation of the environment.
            Recycling contributes to the preservation of resources : Valuable and scarce resources such as minerals, metals, glass etc. can be converted into new products after the use of their earlier commodities is exhausted. This alleviates the burden on the environment to meet the ever increasing demands and on the resource extraction processes.
            Recycling contributes to conservation of Energy : Recycling and secondary production processes do not require as much energy resources as the primary extraction and production processes do. Hence, recycling helps to conserve the precious fuel and energy resources by mitigating energy consumption without compromising on the commodities and needs.
            Recycling generates employment opportunities : Recycling opens an entirely new field of work and job opportunities for the people. All the steps in the process of recycling from waste collection, transportation, segregation, dismantling, conversion into new products and final dispatch to the people, require some amount of workforce. Hence, recycling opens up a gamut of job opportunities for the people.
            Recycling is a boon to the economy : Recycling is the production of goods and commodities, but in a very cost-effective manner. Reduced costs of production, bypass of resource extraction and waste disposal costs, the conservation of energy and the eventual creation of many new jobs and employment opportunities, altogether contribute to an efficient and stable economy.
            From the above arguments, it is needless to say more to express the importance and contributions of Recycling in the present day scenario of rampant resource scarcities and environmental degradation. Recycling can be thought of as a vital link in the industrial and manufacturing sectors of the world economy. A link, aiming to bridge the gap between the production of goods and the requirement of goods in the world, in an eco-friendly manner, with the aim to fulfill human desires without compromising on our environment.
            </Typography>
          </AccordionDetails>
        </Accordion>
        </div>
        <Footer />
    </div>
  )
}

export default RecyclerPage