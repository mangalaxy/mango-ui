import React from 'react';
import colors from "../../../constants/colors";
import {name} from "../../../assets/icons";
import DropDownSelect from "../../../components/inputs/Select/DropDownSelect/DropDownSelect";
import SvgIcon from '../../../components/SvgIcon/SvgIcon';

const mockOptions = [
    {label: 'Option1', value: 'Option1'},
    {label: 'Option2', value: 'Option2'},
    {label: 'Option3', value: 'Option3'},
];

function TalentSkills(props) {
    const {user, edit} = props;
    const {skills} = user;
    const skillsList = skills.map((skill, index) => <TalentSkill skill={skill} key={index} />)
    return (
        <div className='talent-form__section'>
            <div className='section-title'>
                <SvgIcon type={name(colors.COLOR_PRIMARY)}/>
                <div className='section-title__text'>Skills</div>
            </div>
            <div className={`sectin-row ${edit && 'section-row--margin-top'}`}>
                {
                    !edit ?
                    <div className='section-skills-list'>{skillsList}</div>
                        :
                        <div className='section-row'>
                            <DropDownSelect
                                name='languages'
                                options={mockOptions}
                                multi={true}
                                placeholder='Programming Languages (Sripting and Markup)'
                            />
                            <DropDownSelect
                                name='Frameworks'
                                options={mockOptions}
                                multi={true}
                                placeholder='Frameworks'
                            />
                            <DropDownSelect
                                name='Libraries'
                                options={mockOptions}
                                multi={true}
                                placeholder='Libraries'
                            />
                            <DropDownSelect
                                name='Tools'
                                options={mockOptions}
                                multi={true}
                                placeholder='Tools'
                            />
                            <DropDownSelect
                                name='Databases'
                                options={mockOptions}
                                multi={true}
                                placeholder='Databases'
                            />
                            <DropDownSelect
                                name='Platforms'
                                options={mockOptions}
                                multi={true}
                                placeholder='Platforms'
                            />
                            <DropDownSelect
                                name='Environments'
                                options={mockOptions}
                                multi={true}
                                placeholder='Development Environments'
                            />
                        </div>
                }

            </div>
        </div>
    )
}

const TalentSkill = (props) => {
    const {skill} = props;
    return (
        <div className='section-row__skill-item'>
            <div className='section-row__cicle'></div>
            <div className='section-row__skill-text'>{skill}</div>
        </div>
    )
}

export default TalentSkills;