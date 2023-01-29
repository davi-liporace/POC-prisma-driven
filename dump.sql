--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


--
-- Name: descontos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.descontos (
    id integer NOT NULL,
    desconto integer NOT NULL,
    "lancamentoId" integer NOT NULL
);


--
-- Name: descontos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.descontos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: descontos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.descontos_id_seq OWNED BY public.descontos.id;


--
-- Name: lancamentos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.lancamentos (
    id integer NOT NULL,
    valor integer NOT NULL,
    nome text NOT NULL,
    "time" timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "usuarioId" integer NOT NULL
);


--
-- Name: lancamentos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.lancamentos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: lancamentos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.lancamentos_id_seq OWNED BY public.lancamentos.id;


--
-- Name: usuarios; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    usuario text NOT NULL
);


--
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- Name: descontos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.descontos ALTER COLUMN id SET DEFAULT nextval('public.descontos_id_seq'::regclass);


--
-- Name: lancamentos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lancamentos ALTER COLUMN id SET DEFAULT nextval('public.lancamentos_id_seq'::regclass);


--
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public._prisma_migrations VALUES ('bf4ccc53-b434-4bf2-a3fc-3cdf31df791a', '0a0cf7dc46439f44a264a516f79c39c617575547b3f3030882bdabad6615f7b0', '2023-01-29 14:20:10.68598-03', '20230129172010_estrutura_de_dados', NULL, NULL, '2023-01-29 14:20:10.457013-03', 1);
INSERT INTO public._prisma_migrations VALUES ('f1589ce4-0a33-4e2c-8b2a-44047c4b7c92', 'e56f87f7233ba589dc544aac6a058fc1e2bcf5e97b0e28bbbe48a29373f9de0b', '2023-01-29 14:21:56.179359-03', '20230129172156_base_de_dados', NULL, NULL, '2023-01-29 14:21:56.092351-03', 1);


--
-- Data for Name: descontos; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: lancamentos; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.usuarios VALUES (1, 'Joao');
INSERT INTO public.usuarios VALUES (2, 'Carlos');
INSERT INTO public.usuarios VALUES (3, 'Maria');


--
-- Name: descontos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.descontos_id_seq', 1, false);


--
-- Name: lancamentos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.lancamentos_id_seq', 1, false);


--
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 3, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: descontos descontos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.descontos
    ADD CONSTRAINT descontos_pkey PRIMARY KEY (id);


--
-- Name: lancamentos lancamentos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lancamentos
    ADD CONSTRAINT lancamentos_pkey PRIMARY KEY (id);


--
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

