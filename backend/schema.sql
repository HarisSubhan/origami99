-- Origami99 Admin API — MySQL schema.
-- Run once:  mysql -u root -p < schema.sql

CREATE DATABASE IF NOT EXISTS origami99
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE origami99;

-- -------------------------------------------------------------------
-- Admin users (panel login)
-- -------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS admin_users (
  id            VARCHAR(24)  NOT NULL PRIMARY KEY,
  name          VARCHAR(120) NOT NULL,
  email         VARCHAR(190) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role          ENUM('admin','editor','viewer') NOT NULL DEFAULT 'viewer',
  status        ENUM('active','invited','disabled') NOT NULL DEFAULT 'active',
  last_login_at DATETIME NULL,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- -------------------------------------------------------------------
-- Leads — public form submissions
-- -------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS leads (
  id         VARCHAR(24)  NOT NULL PRIMARY KEY,
  name       VARCHAR(160) NOT NULL,
  email      VARCHAR(190) NOT NULL,
  phone      VARCHAR(60)  NULL,
  company    VARCHAR(190) NULL,
  service    VARCHAR(120) NULL,
  message    TEXT         NOT NULL,
  status     ENUM('new','contacted','qualified','won','lost') NOT NULL DEFAULT 'new',
  source     VARCHAR(190) NULL,
  page_url   VARCHAR(500) NULL,
  referrer   VARCHAR(500) NULL,
  ip         VARCHAR(64)  NULL,
  user_agent VARCHAR(500) NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_leads_created (created_at),
  INDEX idx_leads_status  (status)
) ENGINE=InnoDB;

-- -------------------------------------------------------------------
-- Services (public site + admin CMS)
-- -------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS services (
  id             VARCHAR(24)  NOT NULL PRIMARY KEY,
  slug           VARCHAR(120) NOT NULL UNIQUE,
  title          VARCHAR(190) NOT NULL,
  category       VARCHAR(120) NOT NULL,
  summary        TEXT         NOT NULL,
  tagline        VARCHAR(255) NULL,
  hero           TEXT         NULL,
  body           MEDIUMTEXT   NULL,
  hero_image_url VARCHAR(500) NULL,
  published      TINYINT(1)   NOT NULL DEFAULT 1,
  updated_at     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- -------------------------------------------------------------------
-- Blog posts
-- -------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS blogs (
  id           VARCHAR(24)  NOT NULL PRIMARY KEY,
  slug         VARCHAR(190) NOT NULL UNIQUE,
  title        VARCHAR(255) NOT NULL,
  excerpt      TEXT         NOT NULL,
  body         MEDIUMTEXT   NOT NULL,
  cover_url    VARCHAR(500) NULL,
  author       VARCHAR(120) NOT NULL,
  status       ENUM('draft','published') NOT NULL DEFAULT 'draft',
  published_at DATETIME NULL,
  tags         JSON NULL,
  category     VARCHAR(120) NULL,
  updated_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_blogs_status (status)
) ENGINE=InnoDB;

-- -------------------------------------------------------------------
-- Portfolio
-- -------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS portfolio (
  id         VARCHAR(24)  NOT NULL PRIMARY KEY,
  title      VARCHAR(190) NOT NULL,
  client     VARCHAR(190) NOT NULL,
  industry   VARCHAR(120) NOT NULL,
  tags       JSON         NULL,
  summary    TEXT         NOT NULL,
  cover_url  VARCHAR(500) NULL,
  published  TINYINT(1)   NOT NULL DEFAULT 1,
  updated_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- -------------------------------------------------------------------
-- SEO pages
-- -------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS pages (
  id               VARCHAR(24)  NOT NULL PRIMARY KEY,
  slug             VARCHAR(190) NOT NULL UNIQUE,
  title            VARCHAR(255) NOT NULL,
  meta_description TEXT         NOT NULL,
  updated_at       DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- -------------------------------------------------------------------
-- Uploads (metadata only; files live on disk under /uploads)
-- -------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS uploads (
  id         VARCHAR(24)  NOT NULL PRIMARY KEY,
  url        VARCHAR(500) NOT NULL,
  mime       VARCHAR(120) NULL,
  size_bytes INT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;
