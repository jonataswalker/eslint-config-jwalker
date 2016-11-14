define GetFromPkg
$(shell node -p "require('./package.json').$(1)")
endef

LAST_VERSION	:= $(call GetFromPkg,version)
NODE_MODULES	:= ./node_modules/.bin
ESLINT 		:= $(NODE_MODULES)/eslint

# targets
.PHONY: default
default: help

.PHONY: help
help:
	@echo
	@echo "The most common targets are:"
	@echo
	@echo "- publish     Increase version, commit, push and publish"
	@echo "- lint        Check the code with the linter"
	@echo "- test        Run unit tests in the console"
	@echo

.PHONY: lint
lint: index.js
	@$(ESLINT) $^

.PHONY: install
install:
	yarn

.PHONY: test
test: install lint

.PHONY: publish
publish: test
	@if [ ! "$(RELEASE_TYPE)" ]; then \
		echo ""; \
		echo "Release type was not specified!"; \
		echo "Usage: make publish RELEASE_TYPE=\"major|minor|patch\""; \
		echo ""; \
		return 1; \
	fi
	$(eval NEXT_VERSION := $(shell npm version $(RELEASE_TYPE) --no-git-tag-version))
	@git add .
	@git commit -m "Bump to $(NEXT_VERSION)"
	@git tag -a $(NEXT_VERSION) -m "Bump to $(NEXT_VERSION)"
	@git push && git push origin $(NEXT_VERSION) && npm publish
	
.DEFAULT_GOAL := default
