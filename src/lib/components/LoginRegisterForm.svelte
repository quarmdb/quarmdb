CREATE TABLE users ( id bigserial primary key, email text not null,
email_validation_code text not null, email_validated boolean default false,
password_hash text not null, salt text not null, refresh text not null,
allowed_to_login boolean default true, created_at TIMESTAMP DEFAULT NOW() );
