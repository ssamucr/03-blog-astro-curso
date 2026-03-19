
export const formatDate = (dateString: string): string => {
    const dateObj = new Date(dateString);
    
    return Intl.DateTimeFormat('es-ES', {
        day: 'numeric',
        month: 'long',
        year: '2-digit'
    }).format(dateObj);
};