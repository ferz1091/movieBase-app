// Core
import React from 'react';
import { useTranslation } from 'react-i18next';

// Components
import { InfoProperty, Social } from '../../common';

// Assets
import person_null from '../../../../assets/actor_null.jpg';
import person from '../../../../assets/icons/person.png';

// Styles
import { InfoHeaderWrapper } from './styles';

export const PersonInfoHeader = (props) => {
    const { t } = useTranslation();
    return (
            <InfoHeaderWrapper className='person-header'>
                <h2>
                    <img
                        src={person}
                        alt=''
                    />
                    {props.currentPerson.name}
                </h2>
                <div className='person-info'>
                    <div className='person-avatar'>
                        <img
                            src={props.currentPerson.profile_path ? `https://image.tmdb.org/t/p/w200${props.currentPerson.profile_path}` : person_null}
                            alt=''
                        />
                    </div>
                    <div className='person-main-info'>
                        <InfoProperty
                            class='birthday'
                            name={t('person.birthday')}
                            value={new Date(props.currentPerson.birthday).toLocaleDateString()}
                            isVisible={props.currentPerson.birthday}
                        />
                        <InfoProperty
                            class='deathday'
                            name={t('person.deathday')}
                            value={new Date(props.currentPerson.deathday).toLocaleDateString()}
                            isVisible={props.currentPerson.deathday}
                        />
                        <InfoProperty
                            class='birth-place'
                            name={t('person.birth_place')}
                            value={props.currentPerson.place_of_birth}
                            isVisible={props.currentPerson.place_of_birth}
                        />
                        <Social {...props.currentPerson.social} />
                    </div>
                </div>
            </InfoHeaderWrapper>
    )
}
