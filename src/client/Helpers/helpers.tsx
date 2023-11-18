import React from 'react';

export const getInitials: (name: string) => void = (name:string) => {
    name?.split(' ').reduce((acc, word) => acc + word[0].toUpperCase(), '');
}