import React from "react";
import { TableHeadCells, collectionCenters, ewasteBenifits, ewasteDo, ewasteDont } from "../../helpers/ewasteData";
import classes from "./Ewaste.module.css";
import Recycle from "../../assets/recycle.svg";
import GiCheckMark from 'react-icons/gi'

const Ewaste = () => {
  return (
    <div className={classes.product__container}>
      <div className={classes.ewaste__container}>
        <div className={classes.title__container}>
          <h2 className={classes.page__title}>E-Waste Management</h2>
        </div>
        <div className={classes.management__container}>
          <h2 className={classes.management__heading}>
            E-Waste Management and Handling Rules
          </h2>
          <p>
            E-waste is a popular, informal name for electronic products nearing
            the end of their useful life. E-wastes are considered dangerous, as
            certain components of some electronic products contain materials
            that are hazardous, depending on their condition and density. The
            hazardous content of these materials pose a threat to human health
            and environment. Discarded computers, refrigerators, washing
            machines, televisions, VCRs, stereos, copiers, fax machines,
            electric lamps, cell phones, audio equipment , other Electronic
            Items and batteries if improperly disposed can leach lead and other
            substances into soil and groundwater. Many of these products can be
            reused, refurbished, or recycled in an environmentally sound manner
            so that they are less harmful to the ecosystem.
          </p>
        </div>
        <div className={classes.ewaste__recycling__container}>
          <h2 className={classes.ewaste__recycling__heading}>
            Benifits of E-Waste Recycling
          </h2>
          {ewasteBenifits.map((item, index) => (
            <div className={classes.ewaste__recycling__benifit} key={index}>
              <span className={classes.benifit__icon}>{item.icon}</span>
              <div className={classes.benifit__subtitle__container}>
                <h2 className={classes.benifit__subheading}>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
          <div className={classes.ewaste_recycling_image}>
            <img src={Recycle} alt="recycleLogo" className={classes.recycle__logo}/>
          </div>
        </div>
        <div className={classes.dos__and__donots__container}>
          <div className={classes.dos__container}>
            <h2 className={classes.dos__title}>Do's</h2>
            {
              ewasteDo.map((item, index)=>(
                <div className={classes.dos__item} key={index}>
                  <span className={classes.dos__icon}>{item.icon}</span>
                  <p>{item.text}</p>
                </div>
              ))
            }
          </div>
          <div className={classes.donts__container}>
            <h2 className={classes.dos__title}>Dont's</h2>
            {
              ewasteDont.map((item, index)=>(
                <div className={classes.dos__item} key={index}>
                  <span className={classes.dont__icon}>{item.icon}</span>
                  <p>{item.text}</p>
                </div>
              ))
            }
          </div>
          <div className={classes.dont___image}>
            {/* Image goes here */}
            <img src="./" alt="" />
          </div>
          <div className={classes.ewaste__management__plan}>
            <h2 className={classes.management__plan__heading}>E-Waste Management Plan</h2>
            <p>
              In developing country like India, most E-Waste lands up in the
              informal sector where it is recycled without any consideration to
              health and environment. We, being responsible citizen contributes
              our share of Environmental Responsibility and aiding in taking
              care of our environment. Abiding by all the pertinent laws
              associated with E-Waste Management, Our Company has been
              continuously working towards the same. Our company has partnered
              with PRO namely M/s Kar Parivartan LLP. Together with M/s Kar
              Parivartan LLP we have been doing its best in order to proffer
              environmentally sound management of electronic devices which have
              reached their end- of-life and to comply with the new India
              E-Waste Management and Handling rules in providing drop-of centers
              and environmentally sound management of end of life electronics.
              M/s Kar Parivartan LLP has obtained authorizations from the
              appropriate governmental agency. M/s Kar Parivartan LLP will
              receive and recycle customer returned equipment, including all the
              E-Waste.
            </p>
          </div>
          <div className={classes.where__and__how}>
            <h2 className={classes.where__how__title}>Where and how can you recycle your E-Waste?</h2>
            <p>
              Our E-Waste program starts with receiving E-Waste pickup request
              from our end customers through toll free number after which our
              Authorized PRO Partner collects it and transports it to the
              collection centre. No fee is charged from the consumer for giving
              the goods for recycling and there is no monetary benefit included
              in the Recycling Program. The solo aim is to serve the Environment
              by keeping it clean. To recycle your waste electronic items, all
              you have to do is drop E-Waste pick up request by calling us on
              M/s Kar Parivartan LLP’s Toll Free No. 1800 572 1687 from Monday
              to Friday between 10:00 AM to 5:00 PM. Also, customers can drop
              their E-Waste in the drop- box provided at various collection
              centres of KAR PARIVARTAN LLP.
            </p>
          </div>
        </div>
        <div className={classes.ewaste__collection__centers}>
          <h2 className={classes.collection__table__title}> List of Collection Centers</h2>
          <table border="1px" cellSpacing={0} className={classes.collectionCenters__table}>
            <thead>
              <tr>
              {
                TableHeadCells.map((headItem, index)=>(
                  <th key={index} className={classes.HeadCells}>
                    {headItem}
                  </th>
                ))
              }
              </tr>
            </thead>
            <tbody>
            {
            collectionCenters.map((center)=>(
              <tr key={center.index}>
                <td>{center.index}</td>
                <td className={classes.TableCell}>{center.state}</td>
                <td className={classes.TableCell}>{center.location}</td>
                <td className={classes.TableCell}>{center.address}</td>
                <td className={classes.TableCell}>{center.contactPerson}</td>
                <td className={classes.TableCell}>{center.contactNo}</td>
                <td className={classes.TableCell}>{center.tollFree}</td>
              </tr>
            ))
          }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ewaste;
