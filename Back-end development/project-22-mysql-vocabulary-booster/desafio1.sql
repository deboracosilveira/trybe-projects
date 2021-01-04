SELECT COUNTRY_NAME País, IF(REGION_ID = 1, 'incluído', 'não incluído') "Status Inclusão"
FROM hr.countries ORDER BY COUNTRY_NAME;
