# Contributing to Format Converter

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/Utility.git
   cd Utility
   ```
3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

### Prerequisites
- A modern web browser
- A local web server (Python, Node.js, or PHP)
- Git

### Running Locally
```bash
# Using Python
cd public
python3 -m http.server 8000

# Using Node.js
npm install -g serve
serve public

# Using PHP
cd public
php -S localhost:8000
```

Visit `http://localhost:8000` in your browser.

## Making Changes

### Code Style
- Use 4 spaces for indentation (JavaScript, HTML, CSS)
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### HTML/CSS
- Maintain semantic HTML structure
- Keep CSS organized and commented
- Ensure responsive design works on mobile
- Test across different browsers

### JavaScript
- Use vanilla JavaScript (no frameworks)
- Follow existing code patterns
- Add error handling for new features
- Maintain backward compatibility

### Testing
Before submitting a PR:

1. **Test your changes** across browsers:
   - Chrome/Edge
   - Firefox
   - Safari

2. **Run the test suite**:
   - Open `/tests/index.html`
   - Click "Run All Tests"
   - Ensure all tests pass

3. **Add new tests** for new features:
   - Add test cases to `public/tests/index.html`
   - Follow existing test patterns
   - Test both happy path and error cases

4. **Manual testing**:
   - Test all conversion combinations
   - Test with edge cases (empty data, special characters, large files)
   - Verify error messages are user-friendly

## Submitting Changes

### Commit Messages
Use clear, descriptive commit messages:
```
Add TOML format support

- Implement TOML parser integration
- Add TOML conversion tests
- Update README with TOML info
```

### Pull Request Process

1. **Update documentation**:
   - Update README.md if adding features
   - Add inline code comments
   - Update tests documentation

2. **Ensure all tests pass**:
   - Local test suite
   - CI/CD pipeline (if applicable)

3. **Create a Pull Request**:
   - Provide a clear title and description
   - Reference any related issues
   - List what was changed and why
   - Include screenshots for UI changes

4. **Respond to feedback**:
   - Address review comments
   - Update PR as needed
   - Be patient and respectful

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] All tests pass
- [ ] Added new tests (if applicable)
- [ ] Tested across browsers

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows project style
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No breaking changes (or documented)
```

## Feature Requests

Have an idea? Great!

1. **Check existing issues** to avoid duplicates
2. **Open an issue** with:
   - Clear description of the feature
   - Use cases and benefits
   - Potential implementation approach
3. **Wait for feedback** before starting work

## Bug Reports

Found a bug? Please report it!

1. **Check existing issues** first
2. **Create a new issue** with:
   - Clear title
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and OS information
   - Screenshots or error messages

### Bug Report Template
```markdown
**Description**
Clear description of the bug

**To Reproduce**
1. Go to '...'
2. Click on '...'
3. Enter '...'
4. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- Browser: [e.g., Chrome 120]
- OS: [e.g., macOS 14.0]
- Device: [e.g., Desktop, iPhone 12]

**Screenshots**
If applicable, add screenshots
```

## Code Review Process

All PRs go through code review:

1. **Automated checks** must pass:
   - CI/CD pipeline
   - Linting (if applicable)
   - Security checks

2. **Manual review** by maintainers:
   - Code quality
   - Test coverage
   - Documentation
   - Security considerations

3. **Approval and merge**:
   - At least one approval required
   - Squash and merge preferred
   - Delete branch after merge

## Security

If you discover a security vulnerability:

1. **DO NOT** open a public issue
2. **Email** the maintainers directly
3. **Provide** detailed information:
   - Vulnerability description
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

- Open an issue for questions
- Check existing documentation
- Reach out to maintainers

## Recognition

Contributors will be recognized in:
- README.md (contributors section)
- Release notes
- Project documentation

Thank you for contributing to Format Converter!
