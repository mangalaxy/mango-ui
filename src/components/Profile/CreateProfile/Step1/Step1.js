import React from 'react';
import TextInput from "../../../inputs/TextInput/TextInput";
import DropDownSelect from "../../../inputs/Select/DropDownSelect/DropDownSelect";
import SimpleSelect from "../../../inputs/Select/SimpleSelect/SimpleSelect";
import FormButton from "../../../Buttons/FormButton/FormButton";

const mockRoles = [
    {label: 'Role1', value: 'Role1'},
    {label: 'Role2', value: 'Role2'},
    {label: 'Role3', value: 'Role3'},
    {label: 'Role4', value: 'Role4'},
    {label: 'Role5', value: 'Role5'},
    {label: 'Role6', value: 'Role6'},
];

const mockSpecialities = [
    {label: 'Speciality1', value: 'Speciality1'},
    {label: 'Speciality2', value: 'Speciality2'},
    {label: 'Speciality3', value: 'Speciality3'},
];

const mockCountries = [
    {label: 'Ukraine', value: 'Ukraine'},
    {label: 'Germany', value: 'Germany'},
    {label: 'England', value: 'England'},
];

const mockCities = [
    {label: 'Kyiv', value: 'Kyiv'},
    {label: 'Lviv', value: 'Lviv'},
    {label: 'Odessa', value: 'Odessa'},
];

const mockTypes =  [
    {label: 'Full-Time', value: 'Full-Time'},
    {label: 'Remoute', value: 'Remoute'},
    {label: 'Contract', value: 'Contract'},
    {label: 'Part-time', value: 'Part-time'},
];

function Step1(props) {
    const {hidden, next, profile, inputChange, onSelect} = props;

    return (
        <div className='profile-form__item' hidden={hidden}>
            <div className='profile-form__description'>All fields are required unless otherwise stated.</div>
                <div className='profile-form__container'>
                    <div className='profile-form__column-left'>
                        <h2 className='profile-form__title'>position’s name</h2>
                        <TextInput
                            label='Position'
                            name='jobTitle'
                            type='text'
                            onChange={inputChange}
                            value={profile.jobTitle}
                        />
                        <DropDownSelect
                            label='Job Role'
                            name='jobRoles'
                            options={mockRoles}
                            multi={true}
                            type='text'
                            placeholder='Role'
                            onChange={value => onSelect('jobRoles', value)}
                            value={profile.jobRoles}
                        />
                        <DropDownSelect
                            label='Select up to maximum 3 specialties'
                            name='jobSpecialities'
                            options={mockSpecialities}
                            multi={true}
                            placeholder='Specialties'
                            onChange={value => onSelect('jobSpecialities', value)}
                            value={profile.jobSpecialities}
                        />
                    </div>
                    <div className='profile-form__column-right'>
                        <h2 className='profile-form__title'>location</h2>
                        <DropDownSelect
                            label='What places would you like to work?'
                            name='prefferedLocation.country'
                            options={mockCountries}
                            multi={false}
                            placeholder='Country'
                            onChange={value => onSelect('prefferedLocation.country', value)}
                            value={profile.prefferedLocation.country}
                        />
                        <DropDownSelect
                            name='prefferedLocation.city'
                            options={mockCities}
                            multi={false}
                            placeholder='City'
                            onChange={value => onSelect('prefferedLocation.city', value)}
                            value={profile.prefferedLocation.city}
                        />
                        <h2 className='profile-form__title'>type of employment</h2>
                        <SimpleSelect
                            label='What type of employment are you looking for?'
                            name='employmentType'
                            options={mockTypes}
                            multi={false}
                            onChange={value => onSelect('employmentType', value)}
                            value={profile.employmentType}
                        />
                    </div>
                    <div className='buttons-container'>
                        <FormButton
                            text='Next'
                            className='form-button--red'
                            onClick={next}
                            type='submit'
                        />
                    </div>
                 </div>
        </div>
    )
}

export default Step1;